//click function

private var canClick;
private var object;
//private var loc;

function Awake ()
{
	canClick 	 = true;
	object		 = this.gameObject.name;
	//loc			 = this.gameObject.transform.parent.FindChild("camLoc");
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
	switch(object)
	{
		case("creditsPlane"):
			//print("loading credits level");
			Application.LoadLevel("story_credits");
			break;
		case("playPlane"):
			//print("loading game level");
			Application.LoadLevel("story_scene1");
			break;
		case("optPlane"):
			Application.LoadLevel('story_instructions');
			//print("loading options level");
			break;
		case("morePlane"):
			//print("loading more level");
			Application.LoadLevel("story_more");
			break;
	}
}