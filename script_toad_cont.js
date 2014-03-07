//script to control the behaviour of reluctant 

private var range 			: float;
private var xMax			;
private var xMin			;
private var clone			;
private var spawnAttack : Transform;
private var canAttack 	: boolean = true;
private var health			: int = 10;
private var healthScript : aniSprite;
private var toad1_anim : aniSprite;
private var toad2_anim : aniSprite;
private var toad1 ;
private var toad2 ;
private var level_selector : script_levelSelector;

//private var checkPosX : float;

var attack1 :	GameObject;
var target   : GameObject;
var attack2 : GameObject;

function Awake()
{
	toad1 		   = transform.FindChild("anim_toad_ati1");
	toad2		   = transform.FindChild("anim_toad_at2");
	toad1_anim = toad1.GetComponent("aniSprite");
	toad2_anim = toad2.GetComponent("aniSprite");
	
	health				= 10;
	xMax				= transform.position.x + 1.5;
	xMin					= transform.position.x - 1.5;
	spawnAttack 	= transform.FindChild("spawnAttack");
	healthScript 		= transform.FindChild("anim_BossHealth").GetComponent("aniSprite");
	
	toad1.renderer.enabled = true;
	toad2.renderer.enabled = false;

	if (GameObject.Find("Pref_levelSelector"))
	{
		level_selector = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector");	
	}

}

function Update () {
	 
	 //checkPosX = target.transform.position.x;
	 //print (target.transform.position.x);
	 
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
	if (range >= 0 && range <3)
	{	
		toad1.renderer.enabled = true;
		toad2.renderer.enabled = false;
		
		toad1_anim.aniSprite(7,3,0,0,15,15);
		if (canAttack)
		{
			canAttack = false;
			attack(attack1);
		}
	}
	
	// play the attack 2 animation 
	else if (range==5)
	{
		toad1.renderer.enabled = false;
		toad2.renderer.enabled = true;
		
		toad2_anim.aniSprite(5,3,0,0,15,15);
		
		if (target.transform.position.x < transform.position.x && target.transform.position.x > transform.position.x - 0.75   )	
		{
			//print ("tongue hit");
			if (canAttack)
			{
				canAttack = false;
				attack(attack2);
			}
		}
	}
	
	// play the idle animation 
	else 
	{
		toad1.renderer.enabled = true;
		toad2.renderer.enabled = false;
		
		toad1_anim.aniSprite(7,3,1,2,6,12);
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
	clone = Instantiate(power, spawnAttack.position,Quaternion.Euler(90,-180,0));
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
			Application.LoadLevel("level_complete");
			level_selector.totalScore += 100;
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