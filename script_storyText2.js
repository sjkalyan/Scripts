//click function

//var heads : GameObject[];
//var talkPlanes : GameObject [];
var heads1 : GameObject;
var heads2 : GameObject;
var elderHead1 : GameObject;
var elderHead2 : GameObject;
var talkPlanes1 : GameObject;
var talkPlanes2 : GameObject;
var talkPlanes3 : GameObject;
var talkPlanes4 : GameObject;

var skipPlane : GameObject;

private var time : int;
//var skipPlane : GameObject;

renderer.material.mainTexture.Play();
skipPlane.renderer.enabled = true;
skipPlane.gameObject.AddComponent('script_skip');

InvokeRepeating("showTp",0,1);

function showTp()
{
	time = Time.timeSinceLevelLoad;
	//print(time);
	switch(time)
	{
		case(0):
			talkPlanes1.renderer.enabled = true;
			elderHead1.renderer.enabled = true;
			break;
		case(4):
			talkPlanes2.renderer.enabled = true;
			heads1.renderer.enabled = true;
			break;
		case(8):
			talkPlanes3.renderer.enabled = true;
			elderHead2.renderer.enabled = true;
			break;
		case(12):
			talkPlanes4.renderer.enabled =  true;
			heads2.renderer.enabled = true;
			break;
		case(40):
			CancelInvoke();
			changeLevel();
			break;
	}
}
function changeLevel ()
{
	Application.LoadLevel("story_map1");
}

