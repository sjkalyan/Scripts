// Script that creates, moves and kills enemies

// inpector variables
var nextSpawn 						: float 					= 0.0;
var deltaTime 						: float 					= 1.75;
var enemyMoveSpeed			: float 					= 0.0085; 
var canCreateEnemy 			: boolean				= true;
var killThis								: boolean;
var enemType1						: GameObject;
var enemType2						: GameObject;
var killPoint 							: GameObject;
var player 							: Transform;

// private variables
private var clone 			: GameObject ;
private var dist 	 			: int ;
private var bossLevel	: boolean  = false;
private var cloneHt1		: float 		= .22;
private var cloneHt2		: float		= .22;
private var cloneRot1			 		= Quaternion.Euler(0,0,0);
private var cloneRot2			  		= Quaternion.Euler(0,0,0);
private var clonePosZ	: float 		= -0.06;
private var treeLevel 	: boolean  = false;
private var canPause		: boolean = true;
private var killBuffer		: float 		= 0.75;

dist = transform.position.x - killPoint.transform.position.x ;
//dist = Screen.width;

function Start ()
{
	killThis = false;
	canMove = true;
	var level = Application.loadedLevelName;
	
	if (level == 'Level_03' || level == 'Level_06' || level == 'Level_09' || level == 'Level_12' || level == 'Level_15')
	{
		canCreateEnemy = false;
		bossLevel = true;
	}
	
	if (level == 'Level_04' ||  level == 'Level_06')
	{
		cloneRot1 	= Quaternion.Euler(90,180,0);
		clonePosZ 	= -0.4;
		treeLevel 		= true;
		dist 				= 0.0;
		deltaTime 		= 0.5;
		cloneRot2 = cloneRot1;
		killBuffer 	= 0;

	}
	
	if (level == 'Level_01' || level == 'Level_02')
	{
		cloneRot1 = cloneRot2;
	}
	
	if (level == 'Level_05' || level == 'Level_07' || level == 'Level_11' )
	{
		cloneRot1 	= Quaternion.Euler(90,180,0);
		if (level == 'Level_07')
		{
			cloneHt1 = .20;
		}
		else if (level == 'Level_11')
		{
			cloneHt1 = 0.16;
			cloneHt2 = 0.19;
		}
	}
	
	if (level == "Level_08" || level == "Level_10")
	{
		cloneRot1 = cloneRot2 = Quaternion.Euler(90,180,0);
		cloneHt2	= .35;
		cloneHt1 	= .20;
	}
	
	if (level == 'Level_13')
	{
		cloneRot1 	= Quaternion.Euler(90,180,0);
		clonePosZ 	= -0.06;
		dist 				= 0.0;
		deltaTime 		= 0.5;
		cloneRot2 = cloneRot1;
		cloneHt1 = .77;
		cloneHt2	= 0;
	}	
	
	if (level == 'Level_14')
	{
		cloneRot1 	= Quaternion.Euler(90,180,0);
		cloneHt1 = cloneHt2 = 0.35;
	}

	if (level == "Level_meetPleasant")
	{
		canCreateEnemy = false;
		cloneHt1 = cloneHt2 = -0.35;
	}

}

function Update () {
	//check for current time to be greater than the delay interval
	//killOnHit();
	//print 
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		if (canPause)
		{
			//print ("paused");
			//Time.timeScale = 0;			
			canPause = false;
		}
		else
		{
			//Time.timeScale = 1;
			//print("Unpaused");
			canPause = true;
		}	
	}		
	
	if ((Time.timeSinceLevelLoad > nextSpawn) && (canCreateEnemy) && (player.position.x > killPoint.transform.position.x + dist/3))
		{
			nextSpawn = Time.timeSinceLevelLoad + deltaTime ;
			//print(Time.timeSinceLevelLoad+"     "+nextSpawn);
			createEnemy();			
		}
	if (!canCreateEnemy && clone && !killThis &&canPause )
		{
			moveEnemy();
			killEnemy();
		}
	if (!clone && !bossLevel)
	{
		checkCreate();
	}
}

function checkCreate()
{
	//yield WaitForSeconds (2);
	canCreateEnemy=true;
}
//create enemy function
function createEnemy()
{
	//print(transform.parent.parent.position.y + "__" +transform.parent.parent.name );
	if (treeLevel)
	{
		cloneHt1 = cloneHt2 = transform.parent.parent.position.y; 
	}
	
	if (Random.Range(0.0,10.0) < 5)
		{
			//create instance of disturbant
			clone = Instantiate(enemType1, transform.position, cloneRot1);
			clone.transform.position.y = cloneHt1;
		}
	else 
		{
			//create instance of mutant
			clone = Instantiate(enemType2, transform.position, cloneRot2);		
			clone.transform.position.y = cloneHt2;	
		}

	clone.transform.position.z = clonePosZ;																	// set the transform correctly
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
	if (clone.transform.position.x <= killPoint.transform.position.x - killBuffer)
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



