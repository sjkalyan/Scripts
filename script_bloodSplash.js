//control behaviour of the explosion

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(5, 3, 0, 0, 15, 30);
}

Invoke('kill',0.22);

function kill ()
{
	if (this)
	{	Destroy(this.gameObject);		}
}
