function MenuController(model, view) {

	this._model = model;
	this._view = view;

	var _this = this;   

	this._view.updateView();

	this._view.backButtonClicked.attach(function () {
		_this.backButton();
	});

	this._view.printButtonClicked.attach(function () {
		_this.printButton();
	});

}

MenuController.prototype = {
    backButton: function(){        
		window.app.changeView('selector');
    },
    printButton: function(){
    	window.app.changeView('print');
    },
};
