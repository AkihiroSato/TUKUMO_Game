Item = Class.create(sprite,{
	// コンストラクタ
	initialize:function(scene, textureName, size)
	{
		Sprite.call(this, size, size);				// スプライトの初期化
		this.image = g_game.assets[textureName];	// 画像指定
		scene.addChild(this);
	}
})
