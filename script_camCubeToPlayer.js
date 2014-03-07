//Joins the Camera to the palyer so that the cam follows the palyer 
//within certain limits
var target : Transform;
var testHt : float = -.95 ;
private var currentLevel : String;
private var smoothTime : float = 0.25;
private var dampVel		= 0.0;

function Awake()
{
	currentLevel = Application.loadedLevelName;
	//print (currentLevel);
}

function Update () {
	if (currentLevel != 'Level_04' && currentLevel != 'Level_06')
	{
		if (target.position.x > -6.25F && target.position.x < 11.08F )
		{
			transform.position.x = Mathf.SmoothDamp(transform.position.x,(target.position.x + .35), dampVel, smoothTime) ;
			transform.position.z = target.position.z ;
		}		

	}
	
	else if (currentLevel == 'Level_04')
	{
		//print("This level has vertical follow!");
		if (target.position.y >= 0.5)
			{	transform.position.y = Mathf.SmoothDamp(transform.position.y, target.position.y,dampVel, smoothTime);	}
		else 
			{	transform.position.y = 0.5;		}
	}
	
	else if (currentLevel == "Level_06")
	{
		if (target.position.y >= 1.90)
			{	transform.position.y = Mathf.SmoothDamp(transform.position.y, target.position.y,dampVel, smoothTime);	}
		else 
			{	transform.position.y = 1.90;		}			
	}
	if (currentLevel == "Level_01" || currentLevel == "Level_02" || currentLevel == "Level_13")
	{
		while (transform.position.x > 10.9)
		{
			transform.position.x = 10.9;
		}
	}
	if (currentLevel == "Level_05" || currentLevel == "Level_07" || currentLevel == "Level_08")
	{
		while (transform.position.x > 11.15)
		{
			transform.position.x = 11.15;
		}
	}
	if (currentLevel == "Level_10")
	{	
		if (target.position.x > 10.5)
		{
			// transform.position.x = 1
			transform.position.y = testHt; //target.position.y + testHt ;
			transform.position.x = 11.25;
		}
	}	
	
	if (currentLevel == "Level_11")
	{
		// print("Level 10 man");
		if (transform.position.x <= -1.35)
		{
			// transform.position.x = 1
			transform.position.y = testHt;
		}
		else if (transform.position.x > 10.9)
		{
			transform.position.x = 10.9;
		}
		else 
		{
			transform.position.y = 0.8;
		}
	}
	
	if (currentLevel == "Level_14")
	{
		while(transform.position.x > 10.3)
		{
			transform.position.x = 10.3;
		}
	}

}