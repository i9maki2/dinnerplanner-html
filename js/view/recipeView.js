var RecipeView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	var _this = this; 

	this.ingredients = this._elements.ingredients.find("#ingr");

	//EVENTS
	this.backButtonClicked = new Event(this);

	//Buttons
	this.backButton = this._elements.ingredients.find("#backButton");

	this.backButton.click(function () {		
		_this.backButtonClicked.notify();
	});


	this.show = function() {
		this._elements.recipe.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.recipe.addClass("hidden");
	};

	this.updateView = function(){
		this.ingredients.html('');
		//Load Course List On Page Load
		this.updateList();
	};
}

RecipeView.prototype = {
	updateList: function()
	{
		var dishForIngredients = this._model.getDish(1);	

		for (var i = 0; i < dishForIngredients.ingredients.length; i++) {

			var html1 = '<tr><td>'
			+ dishForIngredients.ingredients[i].quantity + " " + dishForIngredients.ingredients[i].unit +'</td><td>'
			+ dishForIngredients.ingredients[i].name + '</td><td>SEK</td><td>'
			+ dishForIngredients.ingredients[i].price + ' :-</td></tr>';

			this.ingredients.prepend(html1);
		};
	}
};