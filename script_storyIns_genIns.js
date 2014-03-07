//click function

private var canClick;

function Awake ()
{
	canClick 	 = true;
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
	Application.LoadLevel("story_genIns");
}