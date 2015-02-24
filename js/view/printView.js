var PrintView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	var _this = this; 

	this.fullMenu = this._elements.print.find("#fullMenu");
	this.numberOfGuests = this._elements.print.find("#numberOfGuests");

	//EVENTS
	this.backButtonClicked = new Event(this);

	//Buttons
	this.backButton = this._elements.print.find("#backButton");

	this.backButton.click(function () {		
		_this.backButtonClicked.notify();
	});

	this.show =function() {
		this._elements.print.removeClass("hidden");
		this.updateView();
	};
	this.hide = function() {
		this._elements.print.addClass("hidden");
	};

	this.updateView = function(){
		this.fullMenu.html('');
		//Load Course List On Page Load
		this.updateList();
	};
}

PrintView.prototype = {
	updateList: function(){
		this.numberOfGuests.html(this._model.getNumberOfGuests());
		var dish = this._model.selectedDishes;

		_.each(dish,function(dish) {
			
			var html =	'<div class="row col-xs-12 col-md-12"><hr><div class="spacer20"></div><div class="col-xs-12 col-md-2"><a href="#" class="thumbnail"><img class="img-thumbnail" src="images/'
			+ dish.image + '"></a></div><div class="col-xs-12 col-md-4"><h1 class="menu-title">'
			+ dish.name +'</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur nunc vel urna ornare, sed feugiat enim ultrices. Proin quis nulla turpis. Vivamus convallis quam quis sodales venenatis. Donec pharetra nunc non blandit lobortis. Cras purus libero, feugiat et tempus ac, hendrerit ac ex.</p></div><div class="col-xs-12 col-md-6"><h3>Preparation</h3><p>'
			+ dish.description + '</p></div></div>';

			this.fullMenu.append(html);
		}, this);
	}
}
