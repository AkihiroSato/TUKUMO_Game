//=============================================================================
// 共通で使用する変数
//=============================================================================

var g_game = null;						// ゲーム本体
var g_totalScore = 200;					// 獲得した総スコア
var g_numberGraph = null;				// 数字の画像

//=============================================================================
// 定数
//=============================================================================

const GAME_FPS = 42;				// フレームレートを指定する
const WIN_SIZE_WIDTH = 480;			// 画面の横幅
const WIN_SIZE_HEIGHT = 320;		// 画面の縦幅
const GAME_SIZE_WIDTH = 380;		//　つくもたんの移動できる範囲
const GAME_RIGHT_SPACE = WIN_SIZE_WIDTH - GAME_SIZE_WIDTH;	// 画面右のスペース
const ITEM_SIZE = 32;				// アイテムのサイズ
const TUKUMO_MOVE_SPEED = 3.1;		// つくもたんの移動速度
const GAME_LIMIT_TIME = 3;			// ゲームのタイムリミット
const SCORE_MAX = 8;				// スコアの最大桁数
const TIME_MAX = 2;					// タイムの最大桁数
const NUMBER_WIDTH = 32;			// 数字画像の横幅
const NUMBER_HEIGHT = 64;			// 数字画像の縦幅
const SCENE_FADE_TIME = 60;			// シーン遷移の時間
