var MenuView = function(model, elements)
{
	this._model = model;
	this._elements = elements;		

	var _this = this; 

	this.dishes = this._elements.menu.find("#fullMenu");	

	//EVENTS
	this.backButtonClicked = new Event(this);
	this.printButtonClicked = new Event(this);

	//Elements
	this.backButton = this._elements.menu.find("#backButton");
	this.printButton = this._elements.menu.find("#printButton");
	this.numberOfGuests = this._elements.menu.find("#numberOfGuests");

	this.backButton.click(function () {		
		_this.backButtonClicked.notify();
	});
	this.printButton.click(function () {
		_this.printButtonClicked.notify();		
	});

	this.show =function() {
		this._elements.menu.removeClass("hidden");
		this.updateView();
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
		this.numberOfGuests.html(this._model.getNumberOfGuests());
		var dish = this._model.selectedDishes;

		_.each(dish,function(dish) {
      
			var html = '<div class="col-xs-6 col-sm-3 placeholder"><h1 class="h5-type" style="text-transform:capitalize;">'
			+ dish.type + '</h1><img src="images/'
			+ dish.image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px; margin:20px;"><h4>'
			+ dish.name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish.description +'</span></div>';

			this.dishes.append(html);
    }, this);
		
	}
}
