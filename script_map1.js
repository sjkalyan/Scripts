// script to change the scene 

private var currentLevel : String;

Invoke("changeScene",15);

function Awake()
{
	currentLevel = Application.loadedLevelName;
	if (GameObject.Find("Pref_levelSelector"))
	{
		GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").lastLevelPlayed = currentLevel;
		//print(GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").lastLevelPlayed);
	}
	
}

function changeScene()
{
//	switch (currentLevel)
//	{
//		case("story_map1"):
//			Application.LoadLevel("Level_01");
//			break;
//		case("story_map2"):
//			Application.LoadLevel("Level_04");
//			break;
//		case("story_map3"):
//			Application.LoadLevel("Level_07");
//			break;
//		case("story_map4"):
//			Application.LoadLevel("Level_10");
//			break;
//		case("story_map5"):
//			Application.LoadLevel("Level_13");
//			break;		
//	}	
	Application.LoadLevel("level_insCont");
}