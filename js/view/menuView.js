var MenuView = function(model, elements)
{
	this._model = model;
	this._elements = elements;		

	var _this = this; 

	this.dishes = this._elements.menu.find("#dishes");	

	//EVENTS
	this.backButtonClicked = new Event(this);
	this.printButtonClicked = new Event(this);

// attach MODEL listeners
    this._model.guestAdded.attach(function () {
		_this.dishes.html('');
		//Load Course List On Page Load
		_this.updateList();
    });
    this._model.guestRemoved.attach(function () {
		_this.dishes.html('');
		//Load Course List On Page Load
    	_this.updateList();
    });


	//Buttons
	this.backButton = this._elements.menu.find("#backButton");
	this.printButton = this._elements.menu.find("#printButton");

	this.backButton.click(function () {		
		_this.backButtonClicked.notify();
	});
	this.printButton.click(function () {
		_this.printButtonClicked.notify();		
	});

	this.show =function() {
		this._elements.menu.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.menu.addClass("hidden");
	};

	this.updateView = function(){
		this.dishes.html('');
		//Load Course List On Page Load
		this.updateList();
	};
}

MenuView.prototype = {
	updateList: function(){

		this.selectedDishes = this._elements.menu.find("#fullMenu");

    	_.each(this._model.selectedDishes, function(dish) {

			var menu = '<div class="col-xs-6 col-sm-3 placeholder"><h1 class="h5-type" style="text-transform:capitalize;">'
			+ dish.type + '</h1><img src="images/'
			+ dish.image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px; margin:20px;"><h4>'
			+ dish.name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish.description +'</span></div>';

			this.dishes.append(menu);

		}, this);


		var total = '<div class="col-xs-6 col-sm-3" style="border-left: 2px solid #ddd; text-align: center;"><h1 class="h5-type" style="text-transform:capitalize;">Total</h1><img src="images/sum.png" class="img-thumbnail" style="max-height:200px; max-width:200px;"><h1 style="text-decoration: underline;">' + this._model.getTotalMenuPrice() + ' SEK</h1></div>';

    	this.dishes.append(total);

	},
}
