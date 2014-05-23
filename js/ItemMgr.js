ItemMgr = Class.create({
	initialize:function(addNode, player)
	{
		this.m_items = [];			// アイテムの配列
		this.m_addNode = addNode;	// アイテムを追加するノード
		this.m_player = player;
		
		//===============================================================
		// 配列にアイテムを登録する
		//===============================================================
		this.AddItem = function(item)
		{
			this.m_items.push(item);
		}
		
		//===============================================================
		// 更新処理
		//===============================================================
		this.onenterframe = function(){
			for(var i = 0; i < this.m_item.length; i++)
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
		// あたり判定をとる
		//===============================================================
		this.Hit = function()
		{
			for(var i = 0; i < this.m_items.length; i++)
			{
				// プレイヤーと当たり判定をとる
				if(this.m_player.intersect(this.m_items[i]))
				{
					this.m_items[i].parentNode.removeChild(this.m_items[i]);
					this.m_items.splice(i, 1);
					
					// 商品総計を増やす
					g_totalScore += 10;
					
					// ゲットラベルを表示させる
					var getLabel = new Label('Get!');
					getLabel.x = this.m_player.x;
					getLabel.y = this.m_player.y - 20;
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
					this.m_addNode.addChild(getLabel);
				}
			}
		}
		
	}
})
