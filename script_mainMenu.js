//script for the main menu

//inspector variables
var bgTex 			: Texture;


function OnGUI () {
    // Constrain all drawing to be within a 800x600 pixel area centered on the screen.
    GUI.BeginGroup (Rect (Screen.width / 2 - 140, Screen.height / 2 - 160, 640, 480), bgTex);

    // Draw a box in the new coordinate space defined by the BeginGroup.
    // Notice how (0,0) has now been moved on-screen
    GUI.Box (Rect (0,0,280,320),"Mainmenu");
    
    if (GUI.Button(Rect(60,30,160,30), "start"))
    {
    	Application.LoadLevel("Level_01");
    }

    // We need to match all BeginGroup calls with an EndGroup
    GUI.EndGroup ();
} 