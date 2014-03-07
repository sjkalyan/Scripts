//click function
var speed : float = 0.0075;
var backPlane : GameObject;

function FixedUpdate()
{
	if (transform.position.y < 1)
	{
		transform.position.y += speed;
	}
	else
	{
		transform.position.y =1;
		if (!backPlane.renderer.enabled)
			{
					backPlane.renderer.enabled = true;
					backPlane.gameObject.AddComponent('script_backToMenu');		
			}
	}
}
