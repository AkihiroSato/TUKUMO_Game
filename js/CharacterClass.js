Character = Class.create(Sprite,{
	// コンストラクタ
	initialize:function(scene, textureName)
	{
		Sprite.call(this,32,32);				// スプライト初期化
		this.image = g_game.assets[textureName];	// 画像指定
		scene.addChild(this);
	}
})


