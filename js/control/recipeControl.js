function RecipeController(model, view) {

	this._model = model;
	this._view = view;
    currentDish = '';	

	var _this = this;   

	this._view.backButtonClicked.attach(function () {
		_this.backButton();
	});

	this._view.confirmDish.click(function(e) {		
    	e.preventDefault();    	

    	_this.action(currentDish);
    	
  	});
}

RecipeController.prototype = {
    backButton: function(){        
		window.app.changeView('selector');
    },

    reciveDish: function(dish){                   
 		this._view.updateView(this._model.getDish(dish));
        currentDish = dish;        
    },
    action: function(dish){
        this._model.addDishToMenu(parseInt(dish));        
        window.app.changeView('selector');
    }
};
