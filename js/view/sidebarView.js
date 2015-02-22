var SidebarView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	//EVENTS
	
	this.plusButtonClicked = new Event(this);
	this.minusButtonClicked = new Event(this);

	var _this = this;

	//If this line is removed then the placeholder will show (Number Of Guests)
	this.updateGuests();

    // attach MODEL listeners
    this._model.guestAdded.attach(function () {
    	_this.updateGuests();
    });
    this._model.guestRemoved.attach(function () {
    	_this.updateGuests();
    });

	//Plus Minus Buttons
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");

	// attach listeners to HTML controls  
	this.plusButton.click(function () {
		_this.plusButtonClicked.notify();
	});
	this.minusButton.click(function () {
		_this.minusButtonClicked.notify();
	});

	this.show =function() {
		this._elements.sidebar.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.sidebar.addClass("hidden");
	};

}

SidebarView.prototype = {
	updateGuests: function () {
       	//Number Of Guests
       	this.numberOfGuests = $("#numberOfGuests");
       	this.numberOfGuests.val(this._model.numberOfGuests);
       }
   };
