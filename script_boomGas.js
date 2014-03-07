//control behaviour of the explosion

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(5, 1, 0, 0, 5, 5);
}

Invoke('kill',0.2);

function kill ()
{
	if (this)
	{	Destroy(this.gameObject);		}
}
