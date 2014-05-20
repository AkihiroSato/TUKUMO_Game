GameScene = Class.create(Scene,{
	// コンストラクタ
	initialize:function()
	{
		Scene.call(this);					// スーパークラスの初期化
		
		var Point = { x : 0, y : 0 };			
		
		var touchPoint = Point;				// タッチポイント
		var counter = 0;					// フレームカウンター
		var itemArray = [];					// 商品を格納する配列
		var totalCounter = 0;				// 獲得した商品の総計
		var getPointLabel = new Label();	// 得点の表示ラベル
		
		// くまを作成
		var kuma = new Character(this, TEX_CHAR_1);
		kuma.speed = 3.2;
		
		// くまの位置を設定
		kuma.y = g_game.height - kuma.height;
		
		// タッチした位置を取得する
		function GetTouchPoint(e)
		{
			touchPoint.x = e.x;
			touchPoint.y = e.y;
		}
		
		// 得点を表示
		getPointLabel.x = 0;
		getPointLabel.y = 0;
		getPointLabel.font = "italic 64px 'ＭＳ 明朝'";
		this.addChild(getPointLabel);
		
		// イベントを登録
		this.ontouchstart = GetTouchPoint;
		
		// 更新処理
		function Update()
		{
			if(touchPoint.x < GAME_SIZE_WIDTH && touchPoint.x > kuma.x) kuma.x += kuma.speed;
			if(touchPoint.x < kuma.x) kuma.x -= kuma.speed;
			
			// エンティティを作成する
			counter++;
			if(counter > 60)
			{
				counter = 0;
				var shopItem = new Sprite();
				shopItem.width = 10;
				shopItem.height = 10;
				shopItem.backgroundColor = "red";
				shopItem.x = Math.random() * (GAME_SIZE_WIDTH - shopItem.width);
				shopItem.y = 10;
				shopItem.onenterframe = function()
				{
					this.y += 2;
					if(this.y > g_game.height) shopItem.parentNode.removeChild(this);
				}
				itemArray.push(shopItem);
				this.addChild(shopItem);			
			}
			
			// あたり判定処理
			for(var i = 0; i < itemArray.length; i++)
			{
				// くまとの当たり判定をとる
				if(kuma.intersect(itemArray[i]))
				{
					itemArray[i].parentNode.removeChild(itemArray[i]);	// 親ノードから自身を削除
					itemArray.splice(i, 1);								// 配列から　自身を削除
					totalCounter += 10;									// 商品総計を増やす
					
					// ゲットラベルを表示させる
					var getLabel = new Label('Get!');
					getLabel.x = kuma.x;
					getLabel.y = kuma.y - 20;
					getLabel.count = 0;
					getLabel.onenterframe = function()
					{
						this.y -= 1;
						this.count++;
						if(this.count > 20)
						{
							this.parentNode.removeChild(this);
						}
					}
					this.addChild(getLabel);
				}
			}
			// 得点を更新する
			getPointLabel.text = totalCounter.toString(10);
			
		}	
		
		this.onenterframe = Update;
		
		// ゲーム右側を追加する
		var gameRightSpace = new Sprite(GAME_RIGHT_SPACE, WIN_SIZE_HEIGHT);
		gameRightSpace.image = g_game.assets[TEX_GAME_RIGHT_SPACE];
		gameRightSpace.x = GAME_SIZE_WIDTH;
		gameRightSpace.y = 0;
		this.addChild(gameRightSpace);
		
		// 背景色を設定
		this.backgroundColor = '#7ecef4';
	}
});