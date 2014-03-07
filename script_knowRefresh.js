//click function

var textures : Texture[];
var texCont : GameObject;
var goBack  : GameObject;

private var canClick;
private var rand;

function Awake ()
{
	canClick 	 = true;
	texCont.renderer.material.mainTexture = textures[2];
	goBack.AddComponent("script_backToMenu");
}

function OnMouseUpAsButton()
{
	if (canClick)
	{
		canClick = false;
		rand = Random.Range(0,11);
		changeTex(rand);
	}
}

function changeTex(r:int)
{
	canClick = true;
	texCont.renderer.material.mainTexture = textures[r];
	//Application.LoadLevel("story_knowEnem");
}