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
	this.changeTotalMenuPrice();

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
       	this.numberOfGuests.val(this._model.getNumberOfGuests());
       	this.changeTotalMenuPrice();
       },
    changeSelectedDish: function(){    	

    	this.selectedDishes = this._elements.sidebar.find("#selectedDishes");    	

    	_.each(this._model.selectedDishes, function(dish) {
    		var html = '<tr><td style="padding-left: 20px;"><h5>'
    		+ dish.name + '</h5></td><td style="text-align: right; padding-right: 20px;"><h5>'
    		+ this._model.getDishPrice(dish.id) + '</h5></td></tr>';

    		this.selectedDishes.append(html);
    	}, this);
    		
    },
    changeTotalMenuPrice: function(){
    	this.selectedDishes = this._elements.sidebar.find("#totalPrice");    	 

    	this.selectedDishes.empty();

    	var html = '<h5>SEK '+ this._model.getTotalMenuPrice() +' :-</h5>'; 

    	this.selectedDishes.append(html); 
    },
};
