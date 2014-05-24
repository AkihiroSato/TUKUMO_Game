//==========================================================================
// 
// 画像管理
//
//==========================================================================
// 読み込む画像
var TEX_TITLE_BACK = "texture/title_back_graph.png";			// タイトルの背景画像
var TEX_START_BUTTON = "texture/start_button.png";				// スタートボタン画面

var TEX_GAME_RIGHT_SPACE = "texture/game_right_space.png";		// ゲーム右側のがぞう
var TEX_ITEM_GRAPHS = "texture/item_graphs.png";				// 商品のがぞう
var TEX_TUKUMO_GRAPH = "texture/tukumo_tan.png";				// つくもたんの画像
var TEX_LABI_GRAPH = "texture/labi_tan.png";					// らびたんの画像
var TEX_LABI_ICON = "texture/labi_icon.png";					// らびたんのアイコン画像
var TEX_JUNK_GRAPH = "texture/junk_tan.png";					// じゃんくたんの画像
var TEX_JUNK_ICON = "texture/junk_icon.png";					// じゃんくたんのアイコン画像

var TEX_RESULT_BACK = "texture/result_back.png";				// リザルト画面の背景画像
var TEX_SCORE_SHOW_BACK = "texture/score_show_back.png";		// スコア表示の背景画像
var TEX_NUMBER = "texture/number_graph_s.png";					// 数字画像




// 読み込み配列
var TEXTURE_LOAD = [
	TEX_TITLE_BACK,
	TEX_GAME_RIGHT_SPACE,
	TEX_ITEM_GRAPHS,
	TEX_TUKUMO_GRAPH,
	TEX_RESULT_BACK,
	TEX_SCORE_SHOW_BACK,
	TEX_NUMBER,
	TEX_START_BUTTON,
	TEX_LABI_GRAPH,
	TEX_LABI_ICON,
	TEX_JUNK_GRAPH,
	TEX_JUNK_ICON
]

function TexturePreLoad()
{
	// 画像プリロード
	g_game.preload(TEXTURE_LOAD);
}
