var SidebarView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	this._elements.sidebar.removeClass("hidden");
	//Number Of Guests
	this.numberOfGuests = $("#numberOfGuests");
	this.numberOfGuests.val(this._model.numberOfGuests);

	//Plus Minus Buttons
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
}
