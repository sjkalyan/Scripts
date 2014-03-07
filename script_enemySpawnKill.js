//script to generate and kill enemies

//inspector variables
var enemType1			: GameObject;
var enemType2			: GameObject;
var killPoint				: GameObject;
var player 				: Transform;
var deltaTime			: float 						=	1.0  	;
var nextSpawn			: float 						= 	0.0	;
var enemSpeed 		: float 						= 	0.01	;


function Update () {

	var enemContainer : GameObject ;

	//create new enemies every 1 secs
	if (Time.time > nextSpawn )
		{
			//var enemContainer	:	GameObject;
			nextSpawn = Time.time + deltaTime	;
			if (Random.Range(0,10) <= 5 )
				{
					enemContainer = enemType1	;
					print ("enemy type 1 created") ;
					print (enemContainer.transform.position.x) ;
				}
			else 
				{
					enemContainer = enemType2	;
				}
			var clone : GameObject = Instantiate(enemContainer, transform.position, transform.rotation)	;
			clone.transform.position.x -= enemSpeed	;
		}

	if (clone != null)
	{	
		kill_enemy (clone);
	}
}

function kill_enemy (enem : GameObject)
{
	if (killPoint != null && enem != null && Mathf.Abs(enem.transform.position.x) < Mathf.Abs(killPoint.transform.position.x )	)
		{
			Destroy(enem)	;
		}
}
