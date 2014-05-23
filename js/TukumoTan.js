TukumoTan = Class.create(Sprite,{
	// コンストラクタ
	initialize:function()
	{
		Sprite.call(this, 64, 64);							// スプライトの初期化
		this.image = g_game.assets[TEX_TUKUMO_GRAPH];		// 画像の呼び出し
		
		this.x = 0;											// X座標指定
		this.y = WIN_SIZE_HEIGHT - this.height;				// Y座標指定
		
		this.speed = TUKUMO_MOVE_SPEED;						// 移動速度の指定
		
		this.movePointX;									// 移動するXポイント
		
		this.originX = 32;									// 中心点を指定
		
		//===================================================================
		// 更新処理
		//===================================================================
		this.onenterframe = function()
		{
			// 移動ポイントが指定されていた場合、一定速度で移動する
			if(this.movePointX < this.x)
			{ 
				this.x -= this.speed;
			}
			if(this.movePointX > this.x)
			{
				this.x += this.speed;
			}
		}
		
		//===================================================================
		// 反転処理
		//===================================================================
		
	}
})
