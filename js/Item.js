Item = Class.create(Sprite,{
	// コンストラクタ
	initialize:function(addGroup, graphNumber)
	{
		Sprite.call(this, ITEM_SIZE, ITEM_SIZE);			// スプライトの初期化
		this.image = g_game.assets[TEX_ITEM_GRAPHS];		// アイテム画像指定
		this.frame = graphNumber;							// 表示アイテム指定
		this.speed = Math.random() * 3.0 + 1.0;					// 落下スピードを初期化
		addGroup.addChild(this);							// 指定シーンに追加
		
		// 出現位置を指定
		this.x = Math.random() * (GAME_SIZE_WIDTH - this.width);
		this.y = -this.height;
		
		// 更新処理
		this.onenterframe = function()
		{
			this.y += this.speed;
		}
	}	
	
})
