// 読み込む画像
var TEX_CHAR_1 =		"texture/chara1.png";
var TEX_TITLE_BACK = 	"texture/title_back_graph.png";
var TEX_GAME_RIGHT_SPACE = "texture/game_right_space.png";

function TexturePreLoad()
{
	// 画像プリロード
	g_game.preload(TEX_CHAR_1);
	g_game.preload(TEX_TITLE_BACK);
	g_game.preload(TEX_GAME_RIGHT_SPACE);
}
