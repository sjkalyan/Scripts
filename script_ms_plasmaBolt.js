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
private var canPlasmaPunch	 : boolean ;
private var totalCoins	  : int ;
private var level_selector : script_levelSelector;

function Awake ()
{
	canClick 	 = true;
	canHover	 = true;
	if (GameObject.Find("Pref_levelSelector"))
	{
		level_selector	= GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector");
	}
}

function OnMouseEnter()
{
	//maxHealth  = level_selector.maxHealth;
	canPlasmaPunch = level_selector.canPlasmaPunch;
	totalCoins	  = level_selector.totalScore;	

	if (!canPlasmaPunch) {
		if (totalCoins >= 450)
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
		canPlasmaPunch = true;
		level_selector.canPlasmaPunch = true;
		totalCoins -= 450;
		level_selector.totalScore -=  450;
	}
}

function OnMouseExit()
{
	canHover = true;
	desCont.renderer.enabled = false;
	if (canPlasmaPunch || totalCoins < 450)
	{
		this.gameObject.renderer.material.mainTexture = greyTex;
		desCont.renderer.material.mainTexture = alreadyTex;					
	}
}