//Script added to the enemy container to check the collisions on enemy

//inspector variables
var sceneManager 	 : GameObject ;

function Update () {

}

function OnTriggerEnter (other : Collider)
{
	if (other.tag == 'Antonio')
	{
		//do player damage
		sceneManager.GetComponent("script_sceneManager").decreaseHealth(1);
		sceneManager.GetComponent("script_sceneManager").createExplosion(2, other.transform.position);
		//Destroy(this.gameObject);	
	}
	
	if(other.tag == 'killBox')
	{
		Destroy(this.gameObject);				
	}
	
	if(other.tag == 'fireBullet' || other.tag == 'blastBullet' || other.tag == 'plasmaBullet')
	{
		//hit
		other.gameObject.GetComponent("script_bullet").kill();
		sceneManager.GetComponent("script_sceneManager").createExplosion(1, this.transform.position);
		sceneManager.GetComponent("script_sceneManager").coinCount(10);
		//break;
		Destroy(this.gameObject);
	}
	
}
