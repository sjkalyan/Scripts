//control behaviour of the explosion
//testing git
function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(6, 1, 0, 0, 6, 6);
}

Invoke('kill',0.2);

function kill ()
{
	if (this)
	{	Destroy(this.gameObject);		}
}
