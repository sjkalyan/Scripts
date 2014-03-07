// Script that creates, moves and kills enemies

// inpector variables
var nextSpawn 						: float 					= 0.0;
var deltaTime 						: float 					= 1.0;
var enemyMoveSpeed			: float 					= 0.01; 
var canCreateEnemy 			: boolean				= true;
var killThis								: boolean;
var enemType1						: GameObject;
var enemType2						: GameObject;
var killPoint 							: GameObject;
var player 							: Transform;

// private variables
private var clone : GameObject ;
private var dist 	  : int ;

dist = transform.position.x - killPoint.transform.position.x ;

function Start ()
{
	killThis = false;
}

function Update () {
	//check for current time to be greater than the delay interval
	//killOnHit();
	
	if ((Time.time > nextSpawn) && (canCreateEnemy) && (player.position.x > killPoint.transform.position.x + dist/2) && !killThis)
		{
			nextSpawn = Time.time + deltaTime ;
			createEnemy();			
		}
	if (!canCreateEnemy && clone && !killThis)
		{
			moveEnemy();
			killEnemy();
		}
}


//create enemy function
function createEnemy()
{
	if (Random.Range(0.0,10.0) < 5)
		{
			//create instance of disturbant
			clone = Instantiate(enemType1, transform.position, transform.rotation);
			clone.transform.position.y = 0.22;
		}
	else 
		{
			//create instance of mutant
			clone = Instantiate(enemType2, transform.position, transform.rotation);		
			clone.transform.position.y = 0.22;	
		}

	clone.transform.position.z = -0.06;																	// set the transform correctly
	canCreateEnemy = false ;
}

//move enemy
function moveEnemy()
{
	if (clone.transform.position.x > killPoint.transform.position.x)
		{
			clone.transform.position.x -= enemyMoveSpeed ; 
		}
}

//kill the enemy
function killEnemy()
{
	//if the enemy moves out of the screen bounds
	if (clone.transform.position.x <= killPoint.transform.position.x)
	{
		Destroy(clone);
		canCreateEnemy = true;
	}
	//if enemy collides with antonio
}

function abruptKill()
{
	if (clone)
	{
		Destroy(clone);
	}
}

function killOnHit()
{
	//print (killThis);
	if (killThis)
	{
		print ("killing this");
		Destroy(clone);
		canCreateEnemy = true;
	}
}

function killSignal( i : int)
{
	if (i==1)
	{
		print ("killing enemy");
		Destroy(clone);
	}
}
