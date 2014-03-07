//controls the total score displayer

private var coinUnits;
private var coinTens;
private var coinHundreds;

var coinCont : Transform ;

private var coinsScored : int;

function Awake()
{

	if (GameObject.Find("Pref_levelSelector"))
	{
		coinsScored = GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector").totalScore;	
	}
	
	//coinsScored = 256;
	coinHundreds			= coinCont.FindChild("hundreds_count").GetComponent("aniSprite");
	coinTens					= coinCont.FindChild("tens_count").GetComponent("aniSprite");
	coinUnits					= coinCont.FindChild("units_count").GetComponent("aniSprite");		
}

Invoke("displayScore",2.2);

function displayScore()
{
	//print(coinsScored);
	
	coinCont.FindChild("hundreds_count").renderer.enabled = true;
	coinCont.FindChild("tens_count").renderer.enabled = true;
	coinCont.FindChild("units_count").renderer.enabled = true;

	var coin_units 			= coinsScored % 10;
	var coin_tmp				= coinsScored / 10;
	var coin_tens			= coin_tmp % 10;
	var coin_hundreds	= coin_tmp / 10;
	
switch (coin_units)
	{
		case 0 :
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
		
		case 6 :				
			coinHundreds.aniSprite(10,1,6,0,10,0);
			break;				

		case 7 :
			coinHundreds.aniSprite(10,1,7,0,10,0);
			break;
		
		case 8 :
			coinHundreds.aniSprite(10,1,8,0,10,0);
			break;
		
		case 9 :				
			coinHundreds.aniSprite(10,1,9,0,10,0);
			break;			
	}

}