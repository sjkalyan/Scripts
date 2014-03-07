//Joins the Camera to the palyer so that the cam follows the palyer 
//within certain limits

var insTextures : Texture[];
var insBgTex		: Texture[];
var insBgCont	: GameObject;
var insFgCont	: GameObject;
var checkSignal : boolean;


private var currentLevel 		: String;
private var previousLevel	 	: String;
private var nextLevel				: String;


function Awake()
{
	if (GameObject.Find("Pref_levelSelector"))
	{
		previousLevel = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").lastLevelPlayed;
		//print("printing form script_inGameIns"+" "+ previousLevel);
	}
	
	checkSignal = false;
	
	switch(previousLevel)
	{
		case("story_map1"):
			nextLevel = "Level_01";
			insBgCont.renderer.material.mainTexture = insBgTex[0];
			insFgCont.renderer.material.mainTexture = insTextures[0];				
			break;
		case("Level_01"):
			insBgCont.renderer.material.mainTexture = insBgTex[0];
			insFgCont.renderer.material.mainTexture = insTextures[12];
			nextLevel = "Level_02";
			break;
		case("Level_02"):
			nextLevel = "Level_03";
			insBgCont.renderer.material.mainTexture = insBgTex[0];
			insFgCont.renderer.material.mainTexture = insTextures[1];
			break;
//		case("Level_03"):
//			nextLevel = "story_map2";
//			break;
		case("story_map2"):
			nextLevel = "Level_04";
			insBgCont.renderer.material.mainTexture = insBgTex[1];
			insFgCont.renderer.material.mainTexture = insTextures[2];				
			break;
		case("Level_04"):
			nextLevel = "Level_05";
			insBgCont.renderer.material.mainTexture = insBgTex[1];
			insFgCont.renderer.material.mainTexture = insTextures[3];
			break;
		case("Level_05"):
			nextLevel = "Level_06";
			insBgCont.renderer.material.mainTexture = insBgTex[1];
			insFgCont.renderer.material.mainTexture = insTextures[4];				
			break;
//		case("Level_06"):
//			nextLevel = "story_map3";
//			break;
		case("story_map3"):
			nextLevel = "Level_07";
			insBgCont.renderer.material.mainTexture = insBgTex[2];
			insFgCont.renderer.material.mainTexture = insTextures[5];		//lub mut		
			break;	
		case("Level_07"):
			nextLevel = "Level_08";
			insBgCont.renderer.material.mainTexture = insBgTex[2];
			insFgCont.renderer.material.mainTexture = insTextures[2];	  // irrit hot
			break;
		case("Level_08"):
			nextLevel = "Level_09";
			insBgCont.renderer.material.mainTexture = insBgTex[2];
			insFgCont.renderer.material.mainTexture = insTextures[7];	// toad
			break;
		case("story_map4"):
			//print("next is level 10");
			nextLevel = "Level_10";
			insBgCont.renderer.material.mainTexture = insBgTex[3];
			insFgCont.renderer.material.mainTexture = insTextures[2];		//irrit hot	
			break;		
		case("Level_10"):
			nextLevel = "Level_11";
			insBgCont.renderer.material.mainTexture = insBgTex[3];
			insFgCont.renderer.material.mainTexture = insTextures[8];	// lub dist
			break;
		case("story_scene3"):
			nextLevel = "Level_12";
			insBgCont.renderer.material.mainTexture = insBgTex[3];
			insFgCont.renderer.material.mainTexture = insTextures[9];	// oneFang
			break;
		case("story_map5"):
			nextLevel = "Level_13";
			insBgCont.renderer.material.mainTexture = insBgTex[4];
			insFgCont.renderer.material.mainTexture = insTextures[0];		//dist rod	
			break;
		case("Level_13"):
			nextLevel = "Level_14";
			insBgCont.renderer.material.mainTexture = insBgTex[4];
			insFgCont.renderer.material.mainTexture = insTextures[10];		//irrit rod
			break;
		case("Level_14"):
			nextLevel = "Level_15";
			insBgCont.renderer.material.mainTexture = insBgTex[4];
			insFgCont.renderer.material.mainTexture = insTextures[11];	// herc
			break;
		case("Level_15"):
			//nextLevel = "story_map5";
			//print("Finally game is over");
			break;
	}
}

Invoke("loadNextLevel",7);

function loadNextLevel()
{
	//print(nextLevel);
	Application.LoadLevel(nextLevel);
}
