//script to control the behvaiour 
var speed : float = 0.02;

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(3,4,0,0,12,12);
	transform.position.x -= speed;
}

InvokeRepeating("killThis",4,4);

function killThis()
{
	if (this)
	{
		Destroy(this.gameObject);
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == 'fireBullet' || other.tag == 'blastBullet' || other.tag == 'plasmaBullet')
	{
		killThis();
	}
}