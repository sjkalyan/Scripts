//Control the proceed button

private var canClick;
private var previousLevel : String;

function Awake()
{
	if (GameObject.Find("Pref_levelSelector"))
	{
		previousLevel = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").lastLevelPlayed ;
	}
}

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

	if (previousLevel != "Level_03" && previousLevel != "Level_06" && previousLevel != "Level_09" && previousLevel != "Level_12" && previousLevel != "Level_11")
	{
		Application.LoadLevel("level_insCont");
	}
	else if (previousLevel == "Level_11")
	{
		Application.LoadLevel("story_scene3");
	}
	
	else if (previousLevel == "Level_03")
	{
		Application.LoadLevel("story_map2");
	}
	else if (previousLevel == "Level_06")
	{
		Application.LoadLevel("story_map3");
	}		
	else if (previousLevel == "Level_09")
	{
		Application.LoadLevel("story_map4");
	}
	else if (previousLevel == "Level_12")
	{
		Application.LoadLevel("story_map5");
	}

}