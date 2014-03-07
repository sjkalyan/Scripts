//click function

private var canClick;
private var lastLevelPlayed : String;

function Awake ()
{
	canClick 	 = true;
}

function Start()
{
	if (GameObject.Find("Pref_levelSelector"))
		{
			lastLevelPlayed = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").lastLevelPlayed;
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
	print("Replay the previous level");
	Application.LoadLevel(lastLevelPlayed);
}