TukumoTan = Class.create(Sprite,{
	// コンストラクタ
	initialize:function(scene, textureName)
	{
		Sprite.cal(this, 32, 32);			// スプライトの初期化
		scene.addChild(this);				// 指定シーンに追加
	}
})
