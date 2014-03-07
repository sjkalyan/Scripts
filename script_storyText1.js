//click function
var speed : float = 0.0035;
var skipPlane : GameObject;

function FixedUpdate()
{
	if (transform.position.y < 1)
	{
		transform.position.y += speed;
	}
	else
	{
		transform.position.y =1;
		if (!skipPlane.renderer.enabled)
			{
					skipPlane.renderer.enabled = true;
					skipPlane.gameObject.AddComponent('script_skip');		
			}
	}
}

Invoke("changeLevel",45);

function changeLevel ()
{
	//print("changing level");
	Application.LoadLevel("story_scene2");
}