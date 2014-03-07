//Control the mutant shop button

private var canClick;
//private var nextLevel : int;
//
//function Awake ()
//{
//	nextLevel	 = Application.LoadLevel("level_insCont");
//	//print(nextLevel);
//}

Invoke("showThis",3);

function showThis()
{
	if(!canClick)
	{
		canClick = true;
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
	Application.LoadLevel("level_mutantShop");
	//print("will load next scene");
}