//script to control camera motion of the scene

var target : Transform;

function Update ()
{
	//transform.position.x = target.position.x;
	//transform.position.y = target.position.y;
	transform.LookAt(target);
}