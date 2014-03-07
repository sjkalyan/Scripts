var frames : int;
var col : int;
var rows : int;
var colStart : int;
var rowStart: int;
var fps : int;
var speed :float = 0;

function Update () {
	var aniPlay = GetComponent('aniSprite');
	aniPlay.aniSprite(col, rows,colStart,rowStart,frames,fps);
	//transform.position.x+= speed;
}

//InvokeRepeating("test",0,.1);
//
//function test()
//{
//	var aniPlay = GetComponent('aniSprite');
//	aniPlay.aniSprite(col, rows,colStart,rowStart,frames,fps);
//}
