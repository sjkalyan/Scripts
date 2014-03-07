//testing the anim sprites

//inspector variables

//private vars
private var faceRight 				: boolean 	= true ;
private var velocity					: Vector3 = Vector3.zero;
var animStartFrame 					: int 			= 0 ;
var frames								: int			= 30 ;

//main function starts here
function Update () {
	
	//move right
	if (Input.GetKey(KeyCode.RightArrow))
	{
		transform.localScale.x = 0.2 ;
		animate_sheet(0) ;
		faceRight = true ;
	}
	
	//move left
	else if (Input.GetKey(KeyCode.LeftArrow))
	{
		gameObject.transform.localScale.x = -0.2 ;
		animate_sheet(0) ;
		faceRight = false ;
	}
	
	//jump
	else if (Input.GetKey(KeyCode.Space))
	{
		//no animation for jump
	}

	//resetting the animStartFrame between actions
	else if (Input.GetKeyUp(KeyCode.RightArrow) || Input.GetKeyUp(KeyCode.LeftArrow) )
	{
		animStartFrame = 0;
	}

	//rest position	
	else
	{
		if (faceRight) { transform.localScale.x = 0.2 ; }
		else { transform.localScale.x = - 0.2  ; }
		animate_sheet(30); 				//starts at 30, iterates till 60
	}

}

function animate_sheet (offset : int)
{
		SendMessage("DrawFrame", animStartFrame + offset) ;	
		animStartFrame += 1 ;
		animStartFrame = animStartFrame%frames;
		print(animStartFrame+offset) ;
		//print(animStartFrame+offset) ;
		//print(frames) ;
}

