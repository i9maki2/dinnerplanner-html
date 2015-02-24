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
	this.removeDishFromMenu = this._elements.sidebar.find("#selectedDishes");	
	

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
		this.changeTotalMenuPrice();
		this.changeSelectedDish();
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

    	this.selectedDishes.empty();   	

    	_.each(this._model.selectedDishes, function(dish) {
    		var html = '<tr><td style="padding-left: 20px;"><h4 class="h5-type" style="text-transform:capitalize;">'
			+ dish.type + '</h4></td></tr><tr><td style="padding-left: 20px;"><h5 style="margin-top: 0px;">'
    		+ dish.name + '</h5></td><td style="text-align: right; padding-bottom: 0px; padding-right: 20px;"><h5 style="margin-top: 0px;">'
    		+ this._model.getDishPrice(dish.id) + '.-</h5><td><a href="#" dishId="'
			+ dish.id + '" style="padding-right: 10px; text-decoration: none; padding-left: 0px;" class="glyphicon glyphicon-remove"></a></td></tr>';

    		this.selectedDishes.append(html);

    	}, this);
    		
    },
    changeTotalMenuPrice: function(){
    	this.selectedDishes = this._elements.sidebar.find("#totalPrice");    	 

    	this.selectedDishes.empty();

    	var html = '<h4>SEK '+ this._model.getTotalMenuPrice() +':-</h4>';

    	this.selectedDishes.append(html); 
    },
};
