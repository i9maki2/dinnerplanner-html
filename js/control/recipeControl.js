function RecipeController(model, view) {

	this._model = model;
	this._view = view;
	this.currentDish;

	var _this = this;   

	this._view.backButtonClicked.attach(function () {
		_this.backButton();
	});

	this._view.confirmDish.click(function(e) {		
    	e.preventDefault();
    	console.log(this.currentDish);

    	///FIXXXXX
    	this._model.addDishToMenu(parseInt(this.currentDish));
    	window.app.switchView('select');
  	});
}

RecipeController.prototype = {
    backButton: function(){        
		window.app.changeView('selector');
    },

    reciveDish: function(dish){
    	this.currentDish = dish;
 		this._view.updateView(this._model.getDish(dish));
    }
};
