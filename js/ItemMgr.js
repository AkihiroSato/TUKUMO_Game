ItemMgr = Class.create(EventTarget,{
	initialize:function(addNode)
	{
		EventTarget.call(this);
		
		this.m_items = [];			// アイテムの配列
		this.m_addNode = addNode;	// アイテムを追加するノード
		
		//===============================================================
		// 役割		: 配列にアイテムを追加する
		// 第一引数	: 追加するアイテム
		// 戻り値		: なし
		//===============================================================
		this.AddItem = function(item)
		{
			this.m_items.push(item);
		}
		
		//===============================================================
		// 更新処理
		//===============================================================
		this.onenterframe = function()
		{
			for(var i = 0; i < this.m_items.length; i++)
			{
				// 画面外に出たら消す
				if(this.m_items[i].y > WIN_SIZE_HEIGHT)
				{
					this.m_items[i].parentNode.removeChild(this.m_items[i]);
					this.m_items.splice(i, 1);
				}
			}
		}
		
		//===============================================================
		// 役割		: あたり判定をとる
		// 第一引数	:　商品とのあたり判定をとるオブジェクト
		// 戻り値		: 当たっていたらtrue, そうでなければfalse
		//===============================================================
		this.Hit = function(player)
		{
			var hitFlag = false;
			for(var i = 0; i < this.m_items.length; i++)
			{
				// プレイヤーと当たり判定をとる
				if(player.intersect(this.m_items[i]))
				{
					this.m_items[i].parentNode.removeChild(this.m_items[i]);
					this.m_items.splice(i, 1);
					
					// 商品総計を増やす
					g_totalScore += 10;
					
					// ゲットラベルを表示させる
					var getLabel = new Label('Get!');
					getLabel.x = player.x;
					getLabel.y = player.y - 20;
					getLabel.count = 0;
					
					// 文字アップ＆消失
					getLabel.onenterframe = function()
					{
						this.y -= 1;
						this.count++;
						if(this.count > 20)
						{
							this.parentNode.removeChild(this);
						}
					}
					this.parentNode.addChild(getLabel);
					hitFlag = true;
				}
			}
			
			return hitFlag;
		}
		
	}
})
