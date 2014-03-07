//save the current level state

var lastLevelPlayed : String ;
var maxHealth		  : int;
var maxEnergy		  : int;
var totalScore		  : int;
var regenTime 		  : float;
var canBlastPunch	  : boolean;
var canPlasmaPunch : boolean;

function Awake() {
    
    maxEnergy 			= 3;
    maxHealth  			= 3;
    totalScore	  			= 000;
    regenTime  			= 3.0;    
    canBlastPunch 		= false;
    canPlasmaPunch	= false;
    DontDestroyOnLoad(transform.gameObject);
    //print("Here I am");
}