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
private var maxEnergy  : int ;//= 3;
private var totalCoins	  : int ;//= 300;
private var level_selector : script_levelSelector;

function Awake ()
{
	canClick 	 = true;
	canHover	 = true;
	if (GameObject.Find("Pref_levelSelector"))
	{
		level_selector	= GameObject.Find("Pref_levelSelector").GetComponent("script_levelSelector");
		//maxEnergy  = level_selector.maxEnergy;
		//totalCoins	  = level_selector.totalScore;	
	}
	
	//print(totalCoins);
	//maxEnergy =3;
}

function OnMouseEnter()
{
	maxEnergy  = level_selector.maxEnergy;
	totalCoins	  = level_selector.totalScore;	
	
	if (maxEnergy != 5) {
		if (canHover)
		{
			if (totalCoins >= 200)
			{
				if (maxEnergy ==3)
				{
					//print("mouse_over ---" + maxEnergy);
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
		if (maxEnergy < 5)
			{	
				desCont.renderer.material.mainTexture = doneTex;
				maxEnergy +=1 ;
				level_selector.maxEnergy += 1;
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
	if (maxEnergy == 5 || totalCoins < 200)
	{
		this.gameObject.renderer.material.mainTexture = greyTex;
		desCont.renderer.material.mainTexture = alreadyTex;					
	}
}