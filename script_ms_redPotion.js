//click function
var greyTex 		: Texture;
var desc1Tex		: Texture;
//var desc2Tex		: Texture;
var doneTex		: Texture;
var alreadyTex	: Texture;
var notEnoughTex	: Texture;

var desCont		: GameObject;

private var canClick;
private var canHover;
//private var maxHealth  : int = 3;
private var regenTime : float	= 3;
private var totalCoins	  : int = 300;
private var level_selector : script_levelSelector;

function Awake ()
{
	canClick 	 = true;
	canHover	 = true;
	if (GameObject.Find("Pref_levelSelector"))
	{
		level_selector	= GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector");
		//maxHealth  = level_selector.maxHealth;
		//totalCoins	  = level_selector.totalScore;	
	}
	
	//print(totalCoins);
	//maxHealth =3;
}

function OnMouseEnter()
{
	//maxHealth  = level_selector.maxHealth;
	regenTime = level_selector.regenTime;
	totalCoins	  = level_selector.totalScore;	

	if (regenTime == 3.0) {
		if (totalCoins >= 300)
		{
			desCont.renderer.material.mainTexture = desc1Tex;
		}
		else
		{
			this.gameObject.renderer.material.mainTexture = greyTex;
			desCont.renderer.material.mainTexture = notEnoughTex;
			canClick = false;
		}
	}
	
	else 
	{
		this.gameObject.renderer.material.mainTexture = greyTex;
		desCont.renderer.material.mainTexture = alreadyTex;
		canClick = false;
	}
	desCont.renderer.enabled = true;
	canHover =false;
}


function OnMouseUpAsButton()
{
	if (canClick)
	{
		desCont.renderer.material.mainTexture = doneTex;
		regenTime = 2.5;
		level_selector.regenTime = 2.5;
		totalCoins -= 300;
		level_selector.totalScore -=  300;
	}
}

function OnMouseExit()
{
	canHover = true;
	desCont.renderer.enabled = false;
	if (regenTime == 2.5 || totalCoins < 300)
	{
		this.gameObject.renderer.material.mainTexture = greyTex;
		desCont.renderer.material.mainTexture = alreadyTex;					
	}
}