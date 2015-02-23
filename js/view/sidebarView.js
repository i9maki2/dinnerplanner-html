var SidebarView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	//EVENTS
	
	this.plusButtonClicked = new Event(this);
	this.minusButtonClicked = new Event(this);
	this.confirmDinnerButtonClicked = new Event(this);

	var _this = this;

	//If this line is removed then the placeholder will show (Number Of Guests)
	this.updateGuests();
	this.changeSelectedDish();

    // attach MODEL listeners
    this._model.guestAdded.attach(function () {
    	_this.updateGuests();
    });
    this._model.guestRemoved.attach(function () {
    	_this.updateGuests();
    });

	//Plus Minus Buttons
	this.plusButton = this._elements.sidebar.find("#plusGuest");	
	this.minusButton = this._elements.sidebar.find("#minusGuest");
	this.confirmDinnerButton = this._elements.sidebar.find("#confirmDinnerButton");
	

	// attach listeners to HTML controls  
	this.plusButton.click(function () {
		_this.plusButtonClicked.notify();
	});
	this.minusButton.click(function () {
		_this.minusButtonClicked.notify();
	});
	this.confirmDinnerButton.click(function () {
		_this.confirmDinnerButtonClicked.notify();
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
       },
    changeSelectedDish: function(){

    	this.selectedDishes = this._elements.sidebar.find("#selectedDishes");    	

    	for (var i = 0; i < this._model.menu.length; i++) {
    		var html = '<tr><td style="padding-left: 20px;"><h5>'
    		+ this._model.menu[i].name + '</h5></td><td style="text-align: right; padding-right: 20px;"><h5>'
    		+ this._model.getDishPrice(this._model.menu[i].id) + '</h5></td></tr>';

    		this.selectedDishes.append(html);
    	};  
    		
    },
    changeTotalMenuPrice: function(){
    	this.selectedDishes = this._elements.sidebar.find("#totalPrice");  

    	var html = '<h5>SEK '+ "" +' :-</h5>';  
    },
};
