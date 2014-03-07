//script to control the behvaiour 
var speed : float = 0.03;

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(5,1,0,0,5,15);
	transform.position.x -= speed;
}

InvokeRepeating("killThis",3,3);

function killThis()
{
	if (this)
	{
		Destroy(this.gameObject);
	}
}

//function OnTriggerEnter(other : Collider)
//{
//	if (other.tag == 'Bullet')
//	{
//		killThis();
//	}
//}