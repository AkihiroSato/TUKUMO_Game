//=============================================================================
// 共通で使用する変数
//=============================================================================

var g_game = null;				// ゲーム本体
var g_score = 0;				// スコアを記録する

//=============================================================================
// 定数
//=============================================================================

const WIN_SIZE_WIDTH = 480;			// 画面の横幅
const WIN_SIZE_HEIGHT = 320;		// 画面の縦幅
const GAME_SIZE_WIDTH = 380;		//　つくもたんの移動できる範囲
const GAME_RIGHT_SPACE = WIN_SIZE_WIDTH - GAME_SIZE_WIDTH;	// 画面右のスペース