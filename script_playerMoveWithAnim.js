/// This script moves the character controller forward 
/// and sideways based on the arrow keys.
/// It also jumps when pressing space.
///This script also plays the animation for the given action 
/// Make sure to attach a character controller to the same game object.
/// It is recommended that you make only one call to Move or SimpleMove per frame.    

//inspector vars	
var sceneManager					: GameObject;																	// scene Manager
var bulletType1							: GameObject;
var bulletType2							: GameObject;
var bulletType3 						: GameObject;
var particleJump						: Transform ;																		// jump particles 
var shootPoint							: Transform;

var walkSpeed				 			: float = 1.0;																		// speed of player movement
var runSpeed							: float = 1.5;																		// speed of player while running
var walkJumpSpeed 					: float = 4.5;																		// speed of standard player jump				
var runJumpSpeed					: float = 5.5;																		// speed of running player jump
var gravity 								: float = 20.0;
var shootLevel							: boolean	= false;																//if player can shoot in this level
var canShoot							: boolean	= true;																// if player can shoot
var signal									: boolean	= false;
var canRenewEnergy					: boolean	= true;
var energy								: int			= 3;
var maxEnergy							: int			= 3;
var regenTime							: float		= 3.0;																// time after which energy should be regenerated										

//private vars
private var velocity 					: Vector3  = Vector3.zero;													// catch direction and magnitude of player movement
private var faceRight 				: boolean 	= true ;																// check if the player faces right or left
private var animStartFrame 		: int 			= 0 ;																	// startFrame to play player spriteSheet
//private var frames						: int			= 30 ;																// no.of sprites(frames) in an action
private var currentLevel			: String;
private var sceneManagerScript : script_sceneManager;
private var canBlastPunch			: boolean = false;
private var canPlasmaPunch		: boolean	= false;
private var bulletScript : script_bullet;
private var ppScript : script_pinkPower;
private var fireHitScript : script_fireHit;
private var toadPowerScript : script_toadPower;
private var greenTwistScript : script_greenTwister;
private var greenPowerScript : script_greenPower;
private var hercFountScript : script_hercFount;
private var hercDrillScript : script_hercDrill;


function Awake()
{
	currentLevel = Application.loadedLevelName;
	
	if (currentLevel != 'Level_01')
	{
		shootLevel = true;
		//print("not level 1, so can shoot");
	}
	else 
	{
		shootLevel = false;
		//print("SHIT! level 1, cannot shoot");
	}	
	
	if (currentLevel == 'Level_04' || currentLevel == 'Level_06')
	{
		shootLevel = true;
		transform.position.z = -0.4;
	}
	
	sceneManagerScript = sceneManager.GetComponent("script_sceneManager");

	if (GameObject.Find("Pref_levelSelector"))
	{
		maxEnergy = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").maxEnergy;
		canBlastPunch = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").canBlastPunch;
		canPlasmaPunch = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").canPlasmaPunch;			
	}
	
	energy = maxEnergy;
	//print("plasmaPunch status "+ canPlasmaPunch);
}

function Update() {
    // var for particle placement
   	var particlePlacement : Vector3 = Vector3 (transform.position.x, transform.position.y-0.15 , transform.position.z) ;     
    var controller : CharacterController = GetComponent(CharacterController);					// get the Character controller

//####################################################################################  
//########################CONTROLLER MOVEMENT########################################
//####################################################################################
	
    if (controller.isGrounded) {
         
        // We are grounded, so recalculate
        velocity = Vector3(Input.GetAxis("Horizontal"), 0, 0);													// move direction directly from axes
        velocity = transform.TransformDirection(velocity);														// transforms from local to world space				
        
        if (velocity.x == 0 && faceRight)																				// idle right
        {
        	transform.localScale.x = 0.15 ;
        	animate_sheet(30,30); 	
        }
        if (velocity.x == 0 && !faceRight)																				// idle left
        {
        	transform.localScale.x = -0.15 ;
        	animate_sheet(30,30); 	
        }
        if (velocity.x > 0 && !Input.GetButton("Fire1"))															// walk right with right animation
        {
        	transform.localScale.x = 0.15 ;
        	animate_sheet(0,30); 
  	        velocity *= walkSpeed;																							// multipy the movement speed by the req factor
        }
        if (velocity.x < 0 && !Input.GetButton("Fire1"))															// walk left with left animation
        {
        	transform.localScale.x = -0.15 ;
        	animate_sheet(0,30); 
  	        velocity *= walkSpeed;																							// multipy the movement speed by the req factor
        }
        
        if (velocity.x > 0 && Input.GetButton("Fire1"))															// run right with right animation
        {
        	transform.localScale.x = 0.15 ;
        	animate_sheet(0,30); 
  	        velocity *= runSpeed;																							// multipy the movement speed by the req factor
        }
        if (velocity.x < 0 && Input.GetButton("Fire1"))															// run left with left animation
        {
        	transform.localScale.x = -0.15 ;
        	animate_sheet(0,30); 
  	        velocity *= runSpeed;																							// multipy the movement speed by the req factor
        }

		if (Input.GetButtonDown ("Vertical"))																	// standard jump into air when grounded
		{
            velocity.y = walkJumpSpeed;
            Instantiate ( particleJump, particlePlacement, transform.rotation );							// smoke particles when jump
            //print(particleJump.transform.position);
        }
        if (Input.GetButtonDown ("Vertical")&& Input.GetButton("Fire1"))// run jump
		{
            velocity.y = runJumpSpeed;
            Instantiate ( particleJump, particlePlacement, transform.rotation );							// smoke particles when jump
        }
}
    
    if (!controller.isGrounded) {
	//if not grounded, in the air we can still move left or right
	velocity.x = Input.GetAxis("Horizontal");
	velocity.x *= walkSpeed;
	}
	
	// check which direction the player faces 
	if (velocity.x < 0)
	{
		faceRight = false;																										// player faces left
	}	
	if (velocity.x > 0)
    {
    	faceRight = true;																										// player faces right
    }

//####################################################################################  
//########################CONTROLLER SHOOT###########################################
//####################################################################################     
    
    // shoot power stuff   
   	checkShoot();

    if (!shootLevel || (shootLevel && energy == 0))
    {
    	//sceneManager.GetComponent(script_sceneManager).checkEnergy(0,maxEnergy);
    	sceneManagerScript.checkEnergy(0,maxEnergy);
    }
    
    if (shootLevel && (energy!=0))
    {
    	if (energy == maxEnergy)
    	{
	    	//sceneManager.GetComponent(script_sceneManager).checkEnergy(energy,maxEnergy);    	    	
	    	sceneManagerScript.checkEnergy(energy,maxEnergy);
		}

    	if (canShoot && Input.GetKeyDown(KeyCode.Space))
    	{
	    	energy -= 1;
	    	//sceneManager.GetComponent(script_sceneManager).checkEnergy(energy,maxEnergy);
	    	sceneManagerScript.checkEnergy(energy,maxEnergy);
	    	canShoot = false;
	    	createShoot("firePunch");  	
    	}
    	
    	if (canShoot && canBlastPunch && energy >= 2 && Input.GetKeyDown(KeyCode.Z))
    	{
    		energy -= 2;
	    	sceneManagerScript.checkEnergy(energy,maxEnergy);
	    	canShoot = false;
	    	createShoot("blastPunch");     		
    	}
    	
    	if (canShoot && canPlasmaPunch && energy >=3 && Input.GetKeyDown(KeyCode.X))
    	{
    		print("plasma punch pressed");
    		energy -= 3;
	    	sceneManagerScript.checkEnergy(energy,maxEnergy);
	    	canShoot = false;
	    	createShoot("plasmaPunch");      		
    	}
	} 
   
   if ((energy < maxEnergy) && canRenewEnergy)
   {
   		regenEnergy();
   }
   
//####################################################################################  
//#########################APPLY GRAVITY AND MOVE#####################################
//####################################################################################      
    // Apply gravity
    velocity.y -= gravity * Time.deltaTime;
    
    // Move the controller
    controller.Move(velocity * Time.deltaTime);
    
    if (currentLevel == "Level_05" || currentLevel == "Level_13")
    {
    	if(transform.position.y <= 0.0)
    	{
    		sceneManagerScript.respawnLevel();
    	}
    }
}

//InvokeRepeating ("regenEnergy",0,regenTime);

function regenEnergy ()
{
	canRenewEnergy = false;
	yield WaitForSeconds(regenTime);
	energy += 1;
	sceneManagerScript.checkEnergy(energy,maxEnergy);
	canRenewEnergy = true;
}

function regenEnergyNew ( t : float)
{
	yield WaitForSeconds (t);
	energy += 1;
	sceneManagerScript.checkEnergy(energy,maxEnergy);
	canRenewEnergy = true;
}

function createShoot (s:String)
{
	switch (s)
	{
		//normal fire punch create
		case ('firePunch'):
			if (faceRight)
			{	bulletClone = Instantiate(bulletType1, shootPoint.position, Quaternion.Euler(90,180,0) );
				bulletScript = bulletClone.GetComponent('script_bullet');
				bulletScript.speed = 0.02;}	
				//bulletClone.GetComponent('script_firePunch').speed = .02;}
			else
			{	bulletClone = Instantiate(bulletType1, shootPoint.position, Quaternion.Euler(-90,0,0) );
				bulletScript = bulletClone.GetComponent('script_bullet');
				bulletScript.speed = -.02;}  
			break;
		
		//create blastPunch
		case ('blastPunch'):
			if (faceRight)
			{	bulletClone = Instantiate(bulletType2, shootPoint.position, Quaternion.Euler(90,180,0) );
				bulletScript = bulletClone.GetComponent('script_bullet');
				bulletScript.speed = 0.02;}	
				//bulletClone.GetComponent('script_firePunch').speed = .02;}
			else
			{	bulletClone = Instantiate(bulletType2, shootPoint.position, Quaternion.Euler(-90,0,0) );
				bulletScript = bulletClone.GetComponent('script_bullet');
				bulletScript.speed = -.02;}  
			break;

		//create plasmaPunch
		case ('plasmaPunch'):
			if (faceRight)
			{	bulletClone = Instantiate(bulletType3, shootPoint.position, Quaternion.Euler(90,180,0) );
				bulletScript = bulletClone.GetComponent('script_bullet');
				bulletScript.speed = 0.02;}	
				//bulletClone.GetComponent('script_firePunch').speed = .02;}
			else
			{	bulletClone = Instantiate(bulletType3, shootPoint.position, Quaternion.Euler(-90,0,0) );
				bulletScript = bulletClone.GetComponent('script_bullet');
				bulletScript.speed = -.02;}  
			break;			
	}
}

function animate_sheet (offset : int, frames :int)
{
		// Calls the animation frames from the sprite Sheet by 
		// broadcasting the message for DrawFrame
		SendMessage("DrawFrame", animStartFrame + offset) ;	
		animStartFrame += 1 ;
		animStartFrame = animStartFrame%frames;
		//print(animStartFrame+offset) ;
}

//check if the player hits a crystal
function OnTriggerEnter (other : Collider) {

    switch (other.tag)
    {
    	case ("MoneyCrystal"):
    		Destroy(other.gameObject);
    		sceneManager.GetComponent('script_sceneManager').coinCount(1);
			break;
		case ("LevelEnd"):
 			sceneManager.GetComponent('script_sceneManager').checkLevelComplete();			
 			break;
 		case("RelucBullet"):
	 		sceneManagerScript.decreaseHealth(1);
	 		sceneManagerScript.createExplosion(2, transform.position);
	 		ppScript = other.gameObject.GetComponent('script_pinkPower');
	 		ppScript.killThis();  				
 			break;
 		case("BeeBullet"):
	 		sceneManagerScript.decreaseHealth(1);
	 		fireHitScript = other.gameObject.GetComponent('script_fireHit');
	 		fireHitScript.killThis();  			
	 		sceneManagerScript.createExplosion(2, transform.position);
 			break;
 		case("ToadBullet"):
	 		sceneManagerScript.decreaseHealth(1);
	 		toadPowerScript = other.gameObject.GetComponent('script_toadPower');
	 		toadPowerScript.killThis();
			sceneManagerScript.createExplosion(2, transform.position);
	 		//print("toad bullet hit");  			
 			break;
 		case("FangBullet1"):
	 		sceneManagerScript.decreaseHealth(1);
	 		sceneManagerScript.createExplosion(2, transform.position);
	 		greenPowerScript = other.gameObject.GetComponent('script_greenPower');
	 		greenPowerScript.killThis();  	
 			break;
 		case("FangBullet2"):
	 		sceneManagerScript.decreaseHealth(1);
	 		sceneManagerScript.createExplosion(2, transform.position);
	 		greenTwistScript = other.gameObject.GetComponent('script_greenTwister');			
	 		greenTwistScript.killThis();
 			break;
 		case("HercBullet1"):
	 		sceneManagerScript.decreaseHealth(1);
	 		sceneManagerScript.createExplosion(2, transform.position);
	 		hercDrillScript = other.gameObject.GetComponent('script_hercDrill');  	
	 		hercDrillScript.killThis();			
 			break;
 		case("HercBullet2"):
	 		sceneManagerScript.decreaseHealth(1);
	 		sceneManagerScript.createExplosion(2, transform.position);
	 		hercFountScript = other.gameObject.GetComponent('script_hercFount');
	 		hercFountScript.killThis();   			
 			break;
 		case("Boss"):
	 		sceneManagerScript.decreaseHealth(3);  
	 		if (currentLevel != "Level_06") { 	sceneManagerScript.createExplosion(2, transform.position);	}
 			break;
 		case("gameEnd"):
 			Application.LoadLevel("story_antoPleas");
 			break;
    }
}

function checkShoot()
{
	if (signal)
	{
		canShoot = true;
	}
}

function getShootSignal ( i : int)
{
	if ( i == 1)
		{
			signal = true;
		}
}