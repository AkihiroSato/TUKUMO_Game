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
		
		// スタートボタンを作成
		var sceneChangeButton = new SceneChangeButton(200, 60, TEX_START_BUTTON, GameScene, this, "black", 40);
		this.addChild(sceneChangeButton);
		
		// スタートボタンを中央に配置する
		sceneChangeButton.x = 100;
		sceneChangeButton.y = 200;
		
	}
})
