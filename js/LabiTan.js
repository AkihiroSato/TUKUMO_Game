LabiTan = Class.create(Sprite,{
	// コンストラクタ
	initialize:function(itemMgr)
	{
		// スーパークラスのコンストラクタ
		Sprite.call(this, 64, 64);
		
		this.image = g_game.assets[TEX_LABI_GRAPH];
		
		this.x = GAME_SIZE_WIDTH;								// 座標Xの初期位置を設定
		this.y = WIN_SIZE_HEIGHT - this.height;					// 座標Yの初期位置を設定
		
		this.m_itemMgr = itemMgr;								// アイテムマネージャーを保存
		
		this.m_executeAiFlag = true;							// 商品走査AIを行うかどうか
		
		this.m_movePointX = 0;									// 移動先のX座標
		
		this.m_halfWidth = this.width * 0.5;					// 横幅の半分のサイズ
		this.m_centerX = this.x + this.m_halfWidth;				// 画像の中心位置のX座標
		
		this.m_existFrame = LABI_SUPPORT_TIME * GAME_FPS;		// らびたんが画面上に存在している時間
		
		//================================================================
		// アイテムを自動追尾するAI
		//================================================================
		this.ItemGetAI = function()
		{
			// 配列が0の時はスルーする
			if(this.m_itemMgr.m_items.length == 0) return;
			
			var nearItemX;										// プレイヤーと最も近い商品のX座標
			var nearDefferenceX = 2000;							// プレイヤーと最も近い商品とのX座標の差	
			var defferenceX;									// プレイヤーと比較する商品とのX座標の差
			
			// 自身とX軸が最も近い商品を取得する
			for(var i = 0; i < this.m_itemMgr.m_items.length; i++)
			{
				defferenceX = Math.abs(this.m_itemMgr.m_items[i].m_centerX - this.m_centerX);
				if(defferenceX < nearDefferenceX)
				{
					nearDefferenceX = defferenceX;
					nearItemX = this.m_itemMgr.m_items[i].m_centerX;
				}
			}	
			
			// 移動アクションを追加する
			this.m_movePointX = nearItemX - this.m_halfWidth;		// 実際に移動するポイント
			this.tl.clear().moveX(this.m_movePointX, Math.abs(this.m_movePointX - this.x) / LABI_MOVE_SPEED);
		}	
		
		//================================================================
		// 更新処理
		//================================================================
		this.onenterframe = function()
		{	
			
			
			// 画像の中心のX座標を更新
			this.m_centerX = this.x + this.m_halfWidth;		
			
			// 移動AI
			this.ItemGetAI();
			
			// あたり判定をとる
			this.m_itemMgr.Hit(this)
			
			// 存在時間を超えた場合、更新処理をやめ、
			if(this.age > this.m_existFrame)
			{
				this.tl.moveX(WIN_SIZE_WIDTH, (WIN_SIZE_WIDTH - this.x) / LABI_MOVE_SPEED).
						removeFromScene();
				
				this.onenterframe = null;
			}
			
		}
	}
})
