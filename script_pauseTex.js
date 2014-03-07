// create a pause screen

var pTexture : Texture;
var kTexture : Texture;
private var tmpText : Texture;

function LateUpdate()
{
	checkKeyBindings();
}

function OnGUI() {
    if(!pTexture){
        Debug.LogError("Assign a Texture in the inspector.");
        return;
    }
    GUI.DrawTexture(Rect(0,0, Screen.width, Screen.height), pTexture, ScaleMode.StretchToFill, true, 0);
}

function checkKeyBindings() : void
{
	if (Input.GetKeyDown(KeyCode.C))
	{
		tmpText = pTexture;
    	//print("yo typed K");
    	pTexture = kTexture;
	}
}