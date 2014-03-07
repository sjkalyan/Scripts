//script to get the sprite sheet to animate

//inspector variables
var healthCount		: int ;
var energyCount 		: int ;

//call to animate function
function Update () {

	//SendMessage('DrawFrame', 3);
	
	if(healthCount==2)
	{
		print("inside the animate script");
		//animate(2);
		SendMessage('DrawFrame', healthCount);
	} 

}

//takes a value from sceneManager and sets to its variables
function setValue(type : String , Value : int)
{
	print('in set value');
	if (type == 'health')
	{	healthCount = Value;	}
	else if (type == 'energy')
	{	energyCount = Value;	}	
	
	Update();
}

 function animate(frame:int)
{
	print("in the animate frame");
	print('health= '+healthCount);
}