TitleScene = Class.create(Scene,{
	// コンストラクタ
	initialize:function()
	{
		Scene.call(this);			// スーパークラスの初期化
		
		// タイトル画像を表示
		var titleBackGraph = new Sprite(g_game.width, g_game.height);
		titleBackGraph.image = g_game.assets[TEX_TITLE_BACK];
		titleBackGraph.x = 0;
		titleBackGraph.y = 0;
		this.addChild(titleBackGraph);
		
		// タッチをしたらフェードアウトに入る
		this.ontouchstart = function()
		{
			var gameScene = new GameScene();
			SceneFadeOut(this, gameScene, "black", SCENE_FADE_TIME);
		}
	}
})
