//animate a SpriteSheet

function aniSprite (columnSize, rowSize, columnStartFrame, rowStartFrame, totalFrames, fps)
{
	var index : int = Time.time*fps	;																													//frames per second
	//index = index % (columnSize*rowSize);																										//modulate index
	index = index % totalFrames	;																														//modulate index
	
	var size 	= Vector2(1.0/columnSize, 1.0/rowSize);																						//set size of single sprite
	
	var u :int	=	index % columnSize;																													//calculate x offset
	var v :int	= index/columnSize;																														//calculate y offset
	
	//var offset	: Vector2 = Vector2(u*size.x, (1-size.y) - (v*size.y));	//calculate 2D offset
    var offset	: Vector2 = Vector2((u + columnStartFrame)*size.x, (1.0-size.y) - ((v + rowStartFrame)*size.y));		//calculate 2D offset

    renderer.material.SetTextureOffset('_MainTex', offset);
    renderer.material.SetTextureScale('_MainTex', size);
    
    //add code for bump map
    //renderer.material.SetTextureOffset("_BumpMap", offset);
    //renderer.material.SetTextureScale("_BumpMap", size);
}


