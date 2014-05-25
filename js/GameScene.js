GameScene = Class.create(Scene,{
	// コンストラクタ
	initialize:function()
	{
		Scene.call(this);					// スーパークラスの初期化
		
		var Point = { x : 0, y : 0 };			
		
		var touchPoint = Point;				// タッチポイント
		var tukumoMovePoint = Point;		// つくもたんの移動先
		var counter = 0;					// フレームカウンター
		var itemArray = [];					// 商品を格納する配列
		var getPointLabel = new Label();	// 得点の表示ラベル
		var timer;							// タイマー
		var timeGraphArray = [];			// タイムを表示する画像配列（2ケタ）
		var tukumo = null;					// つくもたん
		var labi = null;					// らびたん
		var labi_icon = null;				// らびたんのお助けアイコン
		var junk_icon = null;				// じゃんくたんのお助けアイコン
		var thisScene = this;
		
		// ゲームカウントを初期化
		g_game.frame = 0;
		
		// タッチした位置を取得する
		function GetTouchPoint(e)
		{
			// タッチした位置を取得する
			touchPoint.x = e.x;
			touchPoint.y = e.y;
			
			// ゲーム範囲内をタッチした場合、つくもたんに移動ポイントを渡す
			if(touchPoint.x < GAME_SIZE_WIDTH)
			{
				tukumo.m_moveFlag = true;
				tukumo.movePointX = touchPoint.x;
			}
		}
		
		// イベントを登録
		this.ontouchstart = GetTouchPoint;
		
		
		//------------------------------------------------------------------
		// ゲームのUI部分を作成する
		//------------------------------------------------------------------
		
		var uiGroup = new Group();				// ゲームのグループ
		this.addChild(uiGroup);					// ゲームグループを追加
		var gameRightSpace = new Sprite(GAME_RIGHT_SPACE, WIN_SIZE_HEIGHT);
		gameRightSpace.image = g_game.assets[TEX_GAME_RIGHT_SPACE];
		gameRightSpace.x = GAME_SIZE_WIDTH;
		gameRightSpace.y = 0;
		uiGroup.addChild(gameRightSpace);
		
		// タイム表示画像の初期化
		for(var i = 0; i < TIME_MAX; i++)
		{
			var numberSprite = new Sprite(NUMBER_WIDTH, NUMBER_HEIGHT);
			numberSprite.image = g_game.assets[TEX_NUMBER];
			numberSprite.frame = 0;
			numberSprite.originX = 0;
			numberSprite.originY = 0;
			numberSprite.scaleX = 1;
			numberSprite.scaleY = 1;
			numberSprite.x = GAME_SIZE_WIDTH + (GAME_RIGHT_SPACE - NUMBER_WIDTH * numberSprite.scaleX * 2) * 0.5 + i * numberSprite.scaleX * NUMBER_WIDTH;
			numberSprite.y = 20;
			uiGroup.addChild(numberSprite);
			timeGraphArray.push(numberSprite);
		}
		
		
		//------------------------------------------------------------------
		// アイテム管理を作成
		//------------------------------------------------------------------
		
		var itemMgr = new ItemMgr();
		this.addChild(itemMgr);
		
		//------------------------------------------------------------------
		// つくもたんを生成
		//------------------------------------------------------------------
		
		tukumo = new TukumoTan(itemMgr);
		this.insertBefore(tukumo, uiGroup);
		
		
		//------------------------------------------------------------------
		// お助けキャラアイコンを生成する
		//------------------------------------------------------------------
		
		// らびたんアイコン
		labi_icon = new Sprite(SUPPORT_CION_SIZE, SUPPORT_CION_SIZE);
		labi_icon.image = g_game.assets[TEX_LABI_ICON];
		labi_icon.x = GAME_SIZE_WIDTH + (GAME_RIGHT_SPACE - labi_icon.width) * 0.5;
		labi_icon.y = 150;
		
		// タッチした時の動作を指定
		labi_icon.ontouchstart = function()
		{
			// すでに使用済みの場合はスルーする
			if(labi_icon.frame == 1) return;
			
			// アイコンを黒に切り替える
			labi_icon.frame = 1;
			
			// らびたん生成
			labi = new LabiTan(itemMgr);
			thisScene.insertBefore(labi, uiGroup);
		}
		uiGroup.addChild(labi_icon);
		
		
		// じゃんくたんアイコン
		junk_icon = new Sprite(SUPPORT_CION_SIZE, SUPPORT_CION_SIZE);
		junk_icon.image = g_game.assets[TEX_JUNK_ICON];
		junk_icon.x = GAME_SIZE_WIDTH + (GAME_RIGHT_SPACE - junk_icon.width) * 0.5;
		junk_icon.y = 250;
		
		// タッチした時の動作を指定
		junk_icon.ontouchstart = function()
		{
			// すでに使用済みの場合はスルーする
			if(junk_icon.frame == 1) return;
			
			// アイコンを使用済み画像に切り替える
			junk_icon.frame = 1;
			
			// つくもたんの移動速度を一時的にアップさせる
			tukumo.speed += JUNK_UPSPEED;
			this.tl.delay(GAME_FPS * JUNK_SUPPORT_TIME).then(function(){tukumo.speed = TUKUMO_MOVE_SPEED;});
		}
		
		uiGroup.addChild(junk_icon);
		
		
		//------------------------------------------------------------------
		// 得点を表示
		//------------------------------------------------------------------]
		
		getPointLabel.x = GAME_SIZE_WIDTH;
		getPointLabel.y = 0;
		getPointLabel.font = "italic 32px 'ＭＳ 明朝'";
		uiGroup.addChild(getPointLabel);		
		
		
		
		
		//=====================================================================
		// 更新処理
		//=====================================================================
		
		this.onenterframe =function()
		{			
			// カウンター増加
			counter++;
					
			// 残り時間を計算する
			timer = GAME_LIMIT_TIME - Math.floor(g_game.frame/g_game.fps);
			
			// タイマーが0になったらシーンを変更する
			if(timer < 0)
			{
				timer = 0;
				SceneFadeOut(this, ResultScene, "black", SCENE_FADE_TIME);
				this.onenterframe = null;
			} 
			
			// 残り時間の表示を更新する
			var timeLimitString = timer.toString(10);
			for(var i = 0; i < TIME_MAX; i++)
			{
				var stringTime = timer / Math.pow(10, TIME_MAX - i - 1) % 10;
				timeGraphArray[i].frame = stringTime;
			}
			
			// アイテムを作成する
			if(counter > 60)
			{
				counter = 0;
				var itemNum = Math.floor(Math.random() * 8);
				var tmpItem = new Item(this, itemNum);
				itemMgr.AddItem(tmpItem);
			}
			
			// 得点を更新する(10進数)
			getPointLabel.text = g_totalScore.toString(10);
		}	
		
		// 背景色を設定
		this.backgroundColor = '#7ecef4';
	}	
});