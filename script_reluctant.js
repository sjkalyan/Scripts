//script to control the behaviour of reluctant 

private var range 			: float;
private var aniPlay 		: aniSprite;
private var xMax			;
private var xMin			;
private var clone			;
private var spawnAttack : Transform;
private var canAttack 	: boolean = true;
private var health			: int = 10;
private var healthScript : aniSprite;
private var level_selector : script_levelSelector;

var attack1 :	GameObject;
var attack2 : GameObject;

function Awake()
{
	health				= 10;
	aniPlay 				= GetComponent('aniSprite');
	xMax				= transform.position.x + 0.25;
	xMin					= transform.position.x - 0.25;
	spawnAttack 	= transform.FindChild("spawnAttack");
	healthScript 		= transform.FindChild("anim_BossHealth").GetComponent("aniSprite");
	
	if (GameObject.Find("Pref_levelSelector"))
	{
		level_selector = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector");	
	}
}

function Update () {
	 if (health >0)
	 {
 		 moveAndShoot();
	 }
	 else if (health ==0)
	 {
	 	health=0;
	 	//killThis();
	 }
	 checkHealth();
}

//InvokeRepeating("moveAndShoot",0,1);
InvokeRepeating("generateRandomNumber",0,1);

function generateRandomNumber()
{
	range = Random.Range(0, 10);
	//print (range);
	canAttack = true;
}

function moveAndShoot()
{
	// play the attack 1 animation  	
	if (range > 0 && range <3)
	{	
		aniPlay.aniSprite(6,6,0,0,12,12);
		if (canAttack)
		{
			canAttack = false;
			attack(attack1);
		}
	}
	
	// play the attack 2 animation 
	else if (range >= 3 && range <5)
	{
		aniPlay.aniSprite(6,6,0,2,12,12);
		if (canAttack)
		{
			canAttack = false;
			attack(attack2);
		}		
	}
	
	// play the walk animation 
	else 
	{
		aniPlay.aniSprite(6,6,0,4,12,12);
		if (range <= 8 )
		{
			if (transform.position.x > xMin) { transform.position.x -= .01;	}
		}
		else
		{
			if (transform.position.x < xMax) { transform.position.x += .01; }
		}	
	}
}

function attack( power : GameObject)
{
	clone = Instantiate(power, spawnAttack.position,Quaternion.Euler(0,0,180));
	//canAttack = true;
}

function OnTriggerEnter (other : Collider)
{
	switch(other.tag)
	{
		case("fireBullet"):
			health -=1;
			break;
		case("blastBullet"):
			health -= 2;
			break;
		case("plasmaBullet"):
			health -= 3;
			break;
			//print(health);
	}
}

function checkHealth()
{
	//print (health);
	switch (health)
	{
		case 10:
			healthScript.aniSprite(1,11,0,0,1,0);
			break;			
		case 9:
			healthScript.aniSprite(1,11,0,1,1,0);
			break;
		case 8:
			healthScript.aniSprite(1,11,0,2,1,0);
			break;
		case 7:
			healthScript.aniSprite(1,11,0,3,1,0);
			break;			
		case 6:
			healthScript.aniSprite(1,11,0,4,1,0);
			break;
		case 5:
			healthScript.aniSprite(1,11,0,5,1,0);
			break;		
		case 4:
			healthScript.aniSprite(1,11,0,6,1,0);
			break;			
		case 3:
			healthScript.aniSprite(1,11,0,7,1,0);
			break;
		case 2:
			healthScript.aniSprite(1,11,0,8,1,0);
			break;
		case 1:
			healthScript.aniSprite(1,11,0,9,1,0);
			break;			
		case 0:
			healthScript.aniSprite(1,11,0,10,1,0);
			level_selector.totalScore += 100;
			Application.LoadLevel("level_complete");
			break;
		case -1:
			healthScript.aniSprite(1,11,0,10,1,0);
			level_selector.totalScore += 100;
			Application.LoadLevel("level_complete");
			break;
		case -2:
			healthScript.aniSprite(1,11,0,10,1,0);
			level_selector.totalScore += 100;
			Application.LoadLevel("level_complete");
			break;

		}
}