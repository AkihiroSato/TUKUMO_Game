TukumoTan = Class.create(Sprite,{
	// コンストラクタ
	initialize:function(itemMgr)
	{
		Sprite.call(this, 64, 64);							// スプライトの初期化
		this.image = g_game.assets[TEX_TUKUMO_GRAPH];		// 画像の呼び出し
		
		this.x = 0;											// X座標指定
		this.y = WIN_SIZE_HEIGHT - this.height;				// Y座標指定
		
		this.flipFlag = false;								// 反転フラグ
		this.moveFlag = false;								// 移動フラグ
		
		this.speed = TUKUMO_MOVE_SPEED;						// 移動速度の指定
		
		this.movePointX;									// 移動するXポイント
		
		this.m_moveFlag = false;							// 移動フラグ
		
		this.originX = 32;									// 中心点を指定
		
		this.m_halfWidth = this.width * 0.5;				// 横幅の半分
		
		this.m_itemMgr = itemMgr;							// アイテムマネージャーを保持
		
		//===================================================================
		// 反転処理
		//===================================================================
		this.Flip = function()
		{
			if(this.flipFlag == true) 	this.scaleX = 1;
			else						this.scaleX = -1;
		}
		
		//===================================================================
		// 更新処理
		//===================================================================
		this.onenterframe = function()
		{
			// 移動フラグが立っていた場合、移動させる
			if(this.m_moveFlag == true)
			{
				// 画像横幅の半分を引く
				this.movePointX -= this.m_halfWidth;
				// 等速で移動させるための処理
				this.tl.clear().moveX(this.movePointX, Math.abs(this.movePointX - this.x) / TUKUMO_MOVE_SPEED);
				// 反転の有無
				if(this.movePointX < this.x) this.flipFlag = true;
				if(this.movePointX > this.x) this.flipFlag = false;
		
				this.m_moveFlag = false;	
			}
			
			// あたり判定をとる
			this.m_itemMgr.Hit(this);
			
			// 反転処理
			this.Flip();
		}
	}
})
