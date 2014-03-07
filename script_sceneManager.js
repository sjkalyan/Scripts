//Script for SceneManager

//inspector variables
var healthCont						: Transform;
var energyCont						: Transform;
var countdownCont				: Transform;
var coinCountCont				: Transform;
var stageTimeLimit				: int = 300;
var levelCoinMark					: int = 50;
var currentLevel 					: String;
var explosionCont1				: GameObject;
var explosionCont2				: GameObject;
var explosionCont3				: GameObject;


//private vars
private var animHealth;
private var animEnergy;
private var countHundreds;
private var countTens;
private var countUnits;
private var coinUnits;
private var coinTens;
private var coinHundreds;
//private var coinsScored 		: int;
private var explosionClone 	: GameObject;
private var level_selector : script_levelSelector;

//static variables spread across scripts
static var lives	 							: int = 3;
static var health							: int = 3;
static var coinsScored					: int = 0;

function Awake()
{
	animHealth 				= healthCont.GetComponent('aniSprite');		
	animEnergy				= energyCont.GetComponent('aniSprite');
	countHundreds 		= countdownCont.FindChild("hundreds_count").GetComponent("aniSprite");
	countTens 				= countdownCont.FindChild("tens_count").GetComponent("aniSprite");
	countUnits		 		= countdownCont.FindChild("units_count").GetComponent("aniSprite");
	coinHundreds			= coinCountCont.FindChild("coin_hundreds_count").GetComponent("aniSprite");
	coinTens					= coinCountCont.FindChild("coin_tens_count").GetComponent("aniSprite");
	coinUnits					= coinCountCont.FindChild("coin_units_count").GetComponent("aniSprite");
	coinsScored				= 0;	
	coinUnits.aniSprite(10,1,0,0,10,0);
	coinTens.aniSprite(10,1,0,0,10,0);
	coinHundreds.aniSprite(10,1,0,0,10,0);
	currentLevel				= Application.loadedLevelName;
}

function Start()
{
	if (GameObject.Find("Pref_levelSelector"))
	{
		level_selector = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector");	
		level_selector.lastLevelPlayed = currentLevel;
		lives = level_selector.maxHealth;
	}
	health = lives;
}

//invoke the countdown command after every second
InvokeRepeating("countdown",0,1);

function Update () {
	// invoke the countdown method every second
	checkHealth();
}

function decreaseHealth(damage : int)
{
	health -= damage ;
	//print (health) ;
}

function checkEnergy(e:int, maxE:int)
{
	//animEnergy.aniSprite(1,15,0,0,15,1);
	//print(e+" "+maxE);
	if (maxE==3)
	{
		switch(e)
		{
			case 3:
				animEnergy.aniSprite(1,15,0,3,1,0);
				break;
			case 2:
				animEnergy.aniSprite(1,15,0,2,1,0);
				break;
			case 1:
				animEnergy.aniSprite(1,15,0,1,1,0);
				break;
			case 0:
				animEnergy.aniSprite(1,15,0,0,1,0);
				break;				
		}
	}
	else if (maxE==4)
	{
		switch(e)
		{
			case 4:
				animEnergy.aniSprite(1,15,0,8,1,0);
				break;				
			case 3:
				animEnergy.aniSprite(1,15,0,7,1,0);
				break;
			case 2:
				animEnergy.aniSprite(1,15,0,6,1,0);
				break;
			case 1:
				animEnergy.aniSprite(1,15,0,5,1,0);
				break;
			case 0:
				animEnergy.aniSprite(1,15,0,4,1,0);
				break;				
		}
	}
	else if (maxE==5)
	{
		switch(e)
		{
			case 5:
				animEnergy.aniSprite(1,15,0,14,1,0);
				break;
			case 4:
				animEnergy.aniSprite(1,15,0,13,1,0);
				break;				
			case 3:
				animEnergy.aniSprite(1,15,0,12,1,0);
				break;
			case 2:
				animEnergy.aniSprite(1,15,0,11,1,0);
				break;
			case 1:
				animEnergy.aniSprite(1,15,0,10,1,0);
				break;
			case 0:
				animEnergy.aniSprite(1,15,0,9,1,0);
				break;				
		}
	}
}

function checkHealth ()
{
	if (lives==3)
	{
		switch(health)
		{
			case 3:
				//print("health is three");
				animHealth.aniSprite(1,12,0,2,1,0);
				break;
			case 2:
				//print(health);
				animHealth.aniSprite(1,12,0,1,1,0);		
				break;	
			case 1:
				//print(health);
				animHealth.aniSprite(1,12,0,0,1,0);
				break;		
			case 0:
				respawnLevel();
				break;
			case -1:
				respawnLevel();
				break;
			case -2:
				respawnLevel();
				break;
		}
	}
	
	else if (lives==4)
	{
		switch(health)
		{
			case 4:
				animHealth.aniSprite(1,12,0,6,1,0);
				break;
			case 3:
				//print("health is three");
				animHealth.aniSprite(1,12,0,5,1,0);
				break;
			case 2:
				//print(health);
				animHealth.aniSprite(1,12,0,4,1,0);				
				break;	
			case 1:
				//print(health);
				animHealth.aniSprite(1,12,0,3,1,0);
				break;		
			case 0:
				respawnLevel();
				break;
			case -1:
				respawnLevel();
				break;
			case -2:
				respawnLevel();
				break;
			}
	}
	
	else if (lives==5)
	{
		switch(health)
		{
			case 5:
				animHealth.aniSprite(1,12,0,11,1,0);
				break;			
			case 4:
				animHealth.aniSprite(1,12,0,10,1,0);
				break;
			case 3:
				//print("health is three");
				animHealth.aniSprite(1,12,0,9,1,0);
				break;
			case 2:
				//print(health);
				animHealth.aniSprite(1,12,0,8,1,0);				
				break;	
			case 1:
				//print(health);
				animHealth.aniSprite(1,12,0,7,1,0);
				break;		
			case 0:
				respawnLevel();
				break;
			case -1:
				respawnLevel();
				break;
			case -2:
				respawnLevel();
				break;
		}
	}
}

function respawnLevel()
{
	health = 3;
	//print('gameOver');
	Application.LoadLevel("gameOver");
	
}

//use invoke repeating
function countdown ()
{
	countUnits		 		= countdownCont.FindChild("units_count").GetComponent("aniSprite");
	coinHundreds			= coinCountCont.FindChild("coin_hundreds_count").GetComponent("aniSprite");
	coinTens					= coinCountCont.FindChild("coin_tens_count").GetComponent("aniSprite");		

	var countdown 	: int = stageTimeLimit - Time.timeSinceLevelLoad ;
	
	if (countdown ==0)
	{	Application.LoadLevel("level_timedOut");	}
	
	var units 				: int = countdown % 10;
	var tmp				: int = countdown / 10;
	var tens				: int = tmp % 10;
	var hundreds		: int = tmp / 10;

	switch (units)
	{
		case 0 :
			countUnits.aniSprite(10,1,0,0,10,0);
			break;
		
		case 1 :
			countUnits.aniSprite(10,1,1,0,10,0);
			break;
		
		case 2 :				
			countUnits.aniSprite(10,1,2,0,10,0);
			break;				

		case 3 :
			countUnits.aniSprite(10,1,3,0,10,0);
			break;
		
		case 4 :
			countUnits.aniSprite(10,1,4,0,10,0);
			break;
		
		case 5 :				
			countUnits.aniSprite(10,1,5,0,10,0);
			break;			
		
		case 6 :				
			countUnits.aniSprite(10,1,6,0,10,0);
			break;				

		case 7 :
			countUnits.aniSprite(10,1,7,0,10,0);
			break;
		
		case 8 :
			countUnits.aniSprite(10,1,8,0,10,0);
			break;
		
		case 9 :				
			countUnits.aniSprite(10,1,9,0,10,0);
			break;
	}

	switch (tens)
	{
		case 0 :
			countTens.aniSprite(10,1,0,0,10,0);
			break;
		
		case 1 :
			countTens.aniSprite(10,1,1,0,10,0);
			break;
		
		case 2 :				
			countTens.aniSprite(10,1,2,0,10,0);
			break;				

		case 3 :
			countTens.aniSprite(10,1,3,0,10,0);
			break;
		
		case 4 :
			countTens.aniSprite(10,1,4,0,10,0);
			break;
		
		case 5 :				
			countTens.aniSprite(10,1,5,0,10,0);
			break;			
		
		case 6 :				
			countTens.aniSprite(10,1,6,0,10,0);
			break;				

		case 7 :
			countTens.aniSprite(10,1,7,0,10,0);
			break;
		
		case 8 :
			countTens.aniSprite(10,1,8,0,10,0);
			break;
		
		case 9 :				
			countTens.aniSprite(10,1,9,0,10,0);
			break;
	}

	switch (hundreds)
	{
		case 0 :
			countHundreds.aniSprite(10,1,0,0,10,0);
			break;
		
		case 1 :
			countHundreds.aniSprite(10,1,1,0,10,0);
			break;
		
		case 2 :				
			countHundreds.aniSprite(10,1,2,0,10,0);
			break;				

		case 3 :
			countHundreds.aniSprite(10,1,3,0,10,0);
			break;
		
		case 4 :
			countHundreds.aniSprite(10,1,4,0,10,0);
			break;
		
		case 5 :				
			countHundreds.aniSprite(10,1,5,0,10,0);
			break;			
	}

}

function coinCount( c :int )
{
	coinHundreds			= coinCountCont.FindChild("coin_hundreds_count").GetComponent("aniSprite");
	coinTens					= coinCountCont.FindChild("coin_tens_count").GetComponent("aniSprite");
	coinUnits					= coinCountCont.FindChild("coin_units_count").GetComponent("aniSprite");		
	//print(coinUnits);
	
	coinsScored += c;
	//print(coinsScored);
	
	var coin_units 			= coinsScored % 10;
	var coin_tmp				= coinsScored / 10;
	var coin_tens			= coin_tmp % 10;
	var coin_hundreds	= coin_tmp / 10;
	
	//print(coin_tens + '-----' + coin_units);
	
	switch (coin_units)
	{
		case 0 :
			//print(coinUnits);
			coinUnits.aniSprite(10,1,0,0,10,0);
			break;
		
		case 1 :
			coinUnits.aniSprite(10,1,1,0,10,0);
			break;
		
		case 2 :				
			coinUnits.aniSprite(10,1,2,0,10,0);
			break;				

		case 3 :
			coinUnits.aniSprite(10,1,3,0,10,0);
			break;
		
		case 4 :
			coinUnits.aniSprite(10,1,4,0,10,0);
			break;
		
		case 5 :				
			coinUnits.aniSprite(10,1,5,0,10,0);
			break;			
		
		case 6 :				
			coinUnits.aniSprite(10,1,6,0,10,0);
			break;				

		case 7 :
			coinUnits.aniSprite(10,1,7,0,10,0);
			break;
		
		case 8 :
			coinUnits.aniSprite(10,1,8,0,10,0);
			break;
		
		case 9 :				
			coinUnits.aniSprite(10,1,9,0,10,0);
			break;
	}
	
	switch (coin_tens)
	{
		case 0 :
			coinTens.aniSprite(10,1,0,0,10,0);
			break;
		
		case 1 :
			coinTens.aniSprite(10,1,1,0,10,0);
			break;
		
		case 2 :				
			coinTens.aniSprite(10,1,2,0,10,0);
			break;				

		case 3 :
			coinTens.aniSprite(10,1,3,0,10,0);
			break;
		
		case 4 :
			coinTens.aniSprite(10,1,4,0,10,0);
			break;
		
		case 5 :				
			coinTens.aniSprite(10,1,5,0,10,0);
			break;			
		
		case 6 :				
			coinTens.aniSprite(10,1,6,0,10,0);
			break;				

		case 7 :
			coinTens.aniSprite(10,1,7,0,10,0);
			break;
		
		case 8 :
			coinTens.aniSprite(10,1,8,0,10,0);
			break;
		
		case 9 :				
			coinTens.aniSprite(10,1,9,0,10,0);
			break;
	}

	switch (coin_hundreds)
	{
		case 0 :
			coinHundreds.aniSprite(10,1,0,0,10,0);
			break;
		
		case 1 :
			coinHundreds.aniSprite(10,1,1,0,10,0);
			break;
		
		case 2 :				
			coinHundreds.aniSprite(10,1,2,0,10,0);
			break;				

		case 3 :
			coinHundreds.aniSprite(10,1,3,0,10,0);
			break;
		
		case 4 :
			coinHundreds.aniSprite(10,1,4,0,10,0);
			break;
		
		case 5 :				
			coinHundreds.aniSprite(10,1,5,0,10,0);
			break;			
	}

}

function checkLevelComplete()
{
	if (currentLevel == "Level_01")
	{
		if (coinsScored > levelCoinMark)
		{
			levelComplete(currentLevel);
		}
	}
	else 
	{
		levelComplete(currentLevel);
	}	
}

function levelComplete(c : String)
{
	//remove more enemies from being created
	transform.GetComponentInChildren(script_enemy).abruptKill();
	Destroy(transform.GetComponentInChildren(script_enemy));
	if (GameObject.Find("Pref_levelSelector"))
	{
		GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").totalScore += coinsScored;		
	}
	//loadNextLevel(currentLevel);
	Application.LoadLevel("level_complete");
}

function createExplosion( i : int, position : Vector3)
{
	switch(i)
	{
		case 1:
			position -= Vector3(0,0,.1);
			explosionClone = Instantiate(explosionCont1, position, Quaternion.Euler(90,180,0));
			break;
		case 2:
			position -= Vector3(0,0,.01);
			explosionClone = Instantiate(explosionCont2, position, Quaternion.Euler(90,180,0));
			break;
		case 3:
			position -= Vector3(0,0,.01);
			explosionClone = Instantiate(explosionCont3, position, Quaternion.Euler(90,180,0));
			break;						
	}

}
