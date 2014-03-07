//script to control game over text

private var aniPlay : aniSprite;
private var canPlay : boolean;
var staticPlane : GameObject;
var replayButton : GameObject;

function Awake ()
{
	canPlay = true;
}

function Update () {
	if (canPlay)
	{
		aniPlay = GetComponent('aniSprite');
		aniPlay.aniSprite(5, 3, 0, 0, 15, 14);
	}	
}

Invoke("changeTex",1);

function changeTex()
{
	canPlay =false;
	//staticPlane.renderer.enabled = true;
	replayButton.renderer.enabled = true;
	this.renderer.enabled =false;
}