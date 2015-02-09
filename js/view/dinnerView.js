//ExampleView Object constructor
var DinnerView = function (model, elements) {

	this._model = model;
    this._elements = elements;
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = this._elements.dinnerView.find("#numberOfGuests");
	this.plusButton = this._elements.dinnerView.find("#plusGuest");
	this.minusButton = this._elements.dinnerView.find("#minusGuest");
	
	this.numberOfGuests.html(this._model.numberOfGuests);
}
