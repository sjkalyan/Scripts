//click function

private var canClick;
//private var nextLevel : int;
//private var previousLevel :String;
var insCont : GameObject;

function Awake ()
{
	canClick 	 = true;
	if (GameObject.Find("Pref_levelSelector"))
	{
		previousLevel = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").lastLevelPlayed;
		//print("printing form script_inGameIns"+" "+ previousLevel);
	}
}

function OnMouseUpAsButton()
{
	if (canClick)
	{
		insCont.checkSignal = true;
	}
}
