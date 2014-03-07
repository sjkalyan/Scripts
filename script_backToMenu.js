//click function

private var canClick;
private var currLevel;

function Awake ()
{
	canClick 	 = true;
	currLevel	 = Application.loadedLevelName;
}

function OnMouseUpAsButton()
{
	if (canClick)
	{
		switch(currLevel)
		{
			case "story_credits":
				Application.LoadLevel("story_mainMenu_static");
				break;
			case "story_more":
				Application.LoadLevel("story_mainMenu_static");
				break;
			case "story_instructions":
				Application.LoadLevel("story_mainMenu_static");
				break;
			case "story_knowAbil":
				Application.LoadLevel('story_more');
				break;
			case "story_knowEnem":
				Application.LoadLevel('story_more');
				break;
			case "story_genIns":
				Application.LoadLevel('story_instructions');
				break;
			case "story_keyBin":
				Application.LoadLevel('story_instructions');
				break;
		}
	}
}
