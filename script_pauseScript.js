var guiSkin: GUISkin;
var nativeVerticalResolution = 1200.0;
var isPaused : boolean = false;

function Update()
{

    if (Input.GetKeyDown("escape") && !isPaused)
   {
      print("Paused");
      Time.timeScale = 0.0;
      isPaused = true;
   }
   else if(Input.GetKeyDown("escape") && isPaused)
   {
      print("Unpaused");
      Time.timeScale = 1.0;
      isPaused = false;    
   } 
}


function OnGUI ()
{
    // Set up gui skin
    //GUI.skin = guiSkin;

    // Our GUI is laid out for a 1920 x 1200 pixel display (16:10 aspect). The next line makes sure it rescales nicely to other resolutions.
    //GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (Screen.height / nativeVerticalResolution, Screen.height / nativeVerticalResolution, 1)); 

    if(isPaused)
    {
      // RenderSettings.fogDensity = 1;
      
      if(GUI.Button (Rect((Screen.width)/2,((Screen.height)/2 - 20),100, 30), "Resume"))
      {
         print("Continue");
         Time.timeScale = 1.0;
         isPaused = false;   
      }      
      
      if(GUI.Button (Rect((Screen.width)/2,((Screen.height)/2 + 20), 100, 30), "Quit"))
      {
         print("Quit!");
         Application.Quit();
      }
/*
      if(GUI.Button (Rect((Screen.width)/2, (Screen.height)/2, 100,70), "Restart"))
      {
         print("Restart");
         Application.LoadLevel("SomeLevelHere");
         Time.timeScale = 1.0;
         isPaused = false;
      }
*/

   } 


}

