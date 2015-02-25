var RecipeView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	var _this = this; 

	this.ingredients = this._elements.ingredients.find("#ingr");

	//EVENTS
	this.backButtonClicked = new Event(this);

	//Buttons
	this.backButton = this._elements.recipe.find("#backButton");
	this.confirmDish = this._elements.recipe.find("#confirmDish");
	this.dishName = this._elements.dish.find("#dishName");
	this.dishPicture = this._elements.dish.find("#dishPicture");
	this.preparation = this._elements.dish.find("#preparation");	

	this.backButton.click(function () {		
		_this.backButtonClicked.notify();
	});

	this.show = function() {
		this._elements.recipe.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.recipe.addClass("hidden");
	};

	this.updateView = function(selectedDish){
		this.ingredients.html('');
		//Load Course List On Page Load
		this.updateList(selectedDish);
		this.updateDish(selectedDish);
	};
}

RecipeView.prototype = {
	updateList: function(selectedDish)
	{				
		for (var i = 0; i < selectedDish.ingredients.length; i++) {

			var html1 = '<tr><td>'
			+ selectedDish.ingredients[i].quantity + " " + selectedDish.ingredients[i].unit +'</td><td>'
			+ selectedDish.ingredients[i].name + '</td><td>SEK</td><td>'
			+ selectedDish.ingredients[i].price + ' :-</td></tr>';

			this.ingredients.prepend(html1);
		};		
	},
	backButton: function(){        
		window.app.changeView('selector');
    },
    updateDish: function(selectedDish){    	
    	this.dishName.html("");
    	this.dishName.html(selectedDish.name);
    	
    	this.dishPicture.attr('src', 'images/' + selectedDish.image);    	

    	this.preparation.html("");
    	this.preparation.html(selectedDish.description);
    }
};