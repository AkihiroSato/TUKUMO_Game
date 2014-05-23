// 読み込む画像
var TEX_CHAR_1 = "texture/chara1.png";							// キャラのがぞう
var TEX_TITLE_BACK = "texture/title_back_graph.png";			// タイトルの背景画像
var TEX_GAME_RIGHT_SPACE = "texture/game_right_space.png";		// ゲーム右側のがぞう
var TEX_ITEM_GRAPHS = "texture/item_graphs.png";				// 商品のがぞう
var TEX_TUKUMO_GRAPH = "texture/tukumo_tan.png";				// つくもたんの画像
var TEX_RESULT_BACK = "texture/result_back.png";				// リザルト画面の背景画像
var TEX_SCORE_SHOW_BACK = "texture/score_show_back.png";		// スコア表示の背景画像
var TEX_NUMBER = "texture/number_graph_s.png";					// 数字画像

var TEXTURE_LOAD = [
	TEX_CHAR_1,
	TEX_TITLE_BACK,
	TEX_GAME_RIGHT_SPACE,
	TEX_ITEM_GRAPHS,
	TEX_TUKUMO_GRAPH,
	TEX_RESULT_BACK,
	TEX_SCORE_SHOW_BACK,
	TEX_NUMBER
]

function TexturePreLoad()
{
	// 画像プリロード
	g_game.preload(TEXTURE_LOAD);
}
