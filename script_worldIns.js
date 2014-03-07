//Display the world instructions

Invoke("showThis",4);

function showThis()
{
	if (!this.renderer.enabled)
	{
		this.renderer.enabled = true;
	}
}