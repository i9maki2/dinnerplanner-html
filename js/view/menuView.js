var MenuView = function(model, elements)
{
	this._model = model;
	this._elements = elements;		

	var _this = this; 

	this.dishes = this._elements.menu.find("#dishes");	

	//EVENTS
	this.backButtonClicked = new Event(this);
	this.printButtonClicked = new Event(this);

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
		var dish = this._model.getAllDishes("starter", "");

		for (var i = 0; i < dish.length; i++) {

			var html = '<div class="col-xs-6 col-sm-3 placeholder"><img src="images/'
			+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
			+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish[i].description +'</span></div>';

			this.dishes.prepend(html);
		};

	}

}