function RecipeController(model, view) {

	this._model = model;
	this._view = view;

	var _this = this;   

	this._view.updateView();

	this._view.backButtonClicked.attach(function () {
		_this.backButton();
	});
}

RecipeController.prototype = {
    backButton: function(){        
		window.app.changeView('menu');
    }
};
