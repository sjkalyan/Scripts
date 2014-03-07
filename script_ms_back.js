//click function

private var canClick;

function Awake ()
{
	canClick 	 = true;
}

function OnMouseUpAsButton()
{
	if (canClick)
	{
		Application.LoadLevel("level_complete");
	}
}
