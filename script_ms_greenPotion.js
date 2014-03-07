//click function
var greyTex 		: Texture;
var desc1Tex		: Texture;
var desc2Tex		: Texture;
var doneTex		: Texture;
var alreadyTex	: Texture;
var notEnoughTex	: Texture;

var desCont		: GameObject;

private var canClick;
private var canHover;
private var maxHealth  : int = 3;
private var totalCoins	  : int = 300;
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
	maxHealth  = level_selector.maxHealth;
	totalCoins	  = level_selector.totalScore;	

		if (maxHealth != 5) {
		if (canHover)
		{
			if (totalCoins >= 200)
			{
				if (maxHealth ==3)
				{
					//print("mouse_over ---" + maxHealth);
					desCont.renderer.material.mainTexture = desc1Tex;
				}
				else
				{
					desCont.renderer.material.mainTexture = desc2Tex;
				}
			}
			else
			{
				this.gameObject.renderer.material.mainTexture = greyTex;
				desCont.renderer.material.mainTexture = notEnoughTex;
				canClick = false;
			}
		}
	}
	
	else 
	{
		this.gameObject.renderer.material.mainTexture = greyTex;
		desCont.renderer.material.mainTexture	= alreadyTex;
		canClick = false;
	}
	desCont.renderer.enabled = true;
	canHover =false;
}


function OnMouseUpAsButton()
{
	if (canClick)
	{
		if (maxHealth < 5)
			{	
				desCont.renderer.material.mainTexture = doneTex;
				maxHealth +=1 ;
				level_selector.maxHealth += 1;
				totalCoins -= 200;
				level_selector.totalScore -= 200;
			}
		else 
			{
				desCont.renderer.material.mainTexture = alreadyTex;
			}
	}
}

function OnMouseExit()
{
	canHover = true;
	desCont.renderer.enabled = false;
	if (maxHealth == 5 || totalCoins < 200)
	{
		this.gameObject.renderer.material.mainTexture = greyTex;
		desCont.renderer.material.mainTexture = alreadyTex;					
	}
}