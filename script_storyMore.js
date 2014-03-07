//click function
var speed : float = 0.0035;
var backPlane   : GameObject;
var knowEnem : GameObject;
var knowAbil		: GameObject;

Invoke("attachScripts",2.5);

renderer.material.mainTexture.Play();

function attachScripts()
{
	knowEnem.AddComponent("script_knowEnem");
	knowAbil.AddComponent("script_knowAbil");
	backPlane.AddComponent('script_backToMenu');
}