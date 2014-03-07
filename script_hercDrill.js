//script to control the behvaiour 
var speed : float = 0.01;

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(14,1,0,0,14,14);
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