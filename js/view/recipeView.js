var RecipeView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	this._elements.recipe.removeClass("hidden");

	this.ingredients = this._elements.ingredients.find("#ingr");

	var dishForIngredients = this._model.getDish(1);	

	for (var i = 0; i < dishForIngredients.ingredients.length; i++) {
		
		var html1 = '<tr><td>'
		+ dishForIngredients.ingredients[i].quantity + " " + dishForIngredients.ingredients[i].unit +'</td><td>'
		+ dishForIngredients.ingredients[i].name + '</td><td>SEK</td><td>'
		+ dishForIngredients.ingredients[i].price + ' :-</td></tr>';

		this.ingredients.prepend(html1);
	};
}