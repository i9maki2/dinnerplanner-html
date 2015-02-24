function PrintController(model, view) {

	this._model = model;
	this._view = view;

	var _this = this;   

	this._view.updateView();

	this._view.backButtonClicked.attach(function () {
		_this.backButton();
	});
}

PrintController.prototype = {
    backButton: function(){        
		window.app.changeView('selector');
    }
};
