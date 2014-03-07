//click function

private var canClick;
private var nextLevel : int;
function Awake ()
{
	canClick 	 = true;
	nextLevel	 = Application.loadedLevel + 1;
	//print(nextLevel);
}

function OnMouseUpAsButton()
{
	if (canClick)
	{
		loadLevel(nextLevel);
	}
}

function loadLevel(n : int)
{
	canClick = false;
	//print("will load next scene");
	Application.LoadLevel(n);
}