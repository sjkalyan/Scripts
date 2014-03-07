//Control the proceed button

private var canClick;
private var nextLevel : int;
function Awake ()
{
	nextLevel	 = Application.loadedLevel + 1;
	//print(nextLevel);
}

Invoke("showThis",4);

function showThis()
{
	if(!canClick)
	{
		canClick = true;
	}
	
	if (!this.renderer.enabled)
	{
		this.renderer.enabled = true;
	}
}

function OnMouseUpAsButton()
{
	if (canClick)
	{
		loadLevel();
	}
}

function loadLevel()
{
	canClick = false;		
	//Application.LoadLevel(n);
	Application.LoadLevel("level_insCont");
	//print("will load next scene");
}