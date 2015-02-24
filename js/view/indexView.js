var IndexView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	var _this = this; 

	//EVENTS
	this.createButtonClicked = new Event(this);

	//Buttons
	this.createButton = this._elements.index.find("#createButton");	

	this.createButton.click(function () {		
		_this.createButtonClicked.notify();
	});

	this.show =function() {
		this._elements.index.removeClass("hidden");		
	};
	this.hide = function() {
		this._elements.index.addClass("hidden");
	};
}

IndexView.prototype = {

}
