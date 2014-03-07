//script that controls the bullet behaviour
var frames 	: int	= 3;
var col 			: int	= 3;
var rows 		: int	= 1;
var fps 			: int	= 18;
var speed 		: float = 0;

var player		: GameObject;

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(col, rows,0,0,frames,fps);
	transform.position.x+= speed;
}

InvokeRepeating("kill",1,1.5);

function kill()
{
	if (this)
	{
		//print ("bomb timed out...will kill");
		player.GetComponent('script_playerMoveWithAnim').getShootSignal(1);
		Destroy(this.gameObject);
	}
}

function OnTriggerEnter (other : Collider)
{
	if (other.tag == "RelucBullet" || other.tag == "ToadBullet" || other.tag == "BeeBullet" || other.tag == "FangBullet1" || other.tag == "FangBullet2" ||   other.tag == "HercBullet1" || other.tag == "HercBullet2" || other.tag == "Boss")
	{
		kill();
	}
}
 
