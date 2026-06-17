MainGame.GameOverState = function(game){

	this.win = false;
};

MainGame.GameOverState.prototype = {

	create: function(){

		// Dark overlay first
		var overlay = this.add.graphics(0, 0);
		overlay.beginFill(0x000000, 0.6);
		overlay.drawRect(0, 0, 1024, 768);
		overlay.endFill();
		overlay.fixedToCamera = true;

		if(this.win){
			var s = this.add.sprite(1024/2, 768/2, 'youwin');
			s.anchor.setTo(0.5, 0.5);
			s.fixedToCamera = true;
		}
		else{
			var s = this.add.sprite(1024/2, 768/2, 'youlose');
			s.anchor.setTo(0.5, 0.5);
			s.fixedToCamera = true;
		}

		// Click or any key to restart
		this.game.input.onDown.addOnce(this.restart, this);
		this.game.input.keyboard.onDownCallback = this.restart.bind(this);
	},

	restart: function(){
		// Reset managers
		CollisionManager = new CollisionManager(this.game);
		InventoryManager = new InventoryManager(this.game);
		GUIManager       = new GUIManager(this.game);
		WaveManager      = new WaveManager(this.game);
		this.game.state.start('Game');
	},

	update: function(){

	}
};
