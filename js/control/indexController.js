function IndexController(model, view) {

	this._model = model;
	this._view = view;

	var _this = this;   

	this._view.createButtonClicked.attach(function () {
		_this.createDinnerButton();
	});

}

IndexController.prototype = {
	createDinnerButton: function(){        
		window.app.changeView('selector');
    }
    
};
