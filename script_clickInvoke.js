//click function
//var attachScript : script_click ;

Invoke("attachClick", 5.0);

function attachClick ()
{
	this.gameObject.AddComponent(script_clickMainMenu);
}