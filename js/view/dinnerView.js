//ExampleView Object constructor
var DinnerView = function (model, elements) {

	this._model = model;
	this._elements = elements;

	//Planner.html----------------------------------------------------
	//----------------------------------------------------------------


	//Left Navigational Bar (My Dinner)
	//----------------------------------------------------------------
	//Number Of Guests
	this.numberOfGuests = $("#numberOfGuests");
	//this.numberOfGuests.val(this._model.numberOfGuests);

	//Plus Minus Buttons
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	

	//Main Part (Select Dish)
	//----------------------------------------------------------------
	//Choosing a course (dropdown menu)
	this.courseDropDown = $("#courses");

	//Search Bar
	this.searchBarInputText = $("searchBarInputText");
	this.searchBarButton = $("searchBarButton");
	

	//Dishes (traversing Array to show each dish from the specific course)
	//In this case it will show only main dish)
	this.dishes = this._elements.selectDish.find("#dishes");	

	var dish = this._model.getAllDishes("starter", "");

	for (var i = 0; i < dish.length; i++) {		

		var html = '<div class="col-xs-6 col-sm-3 placeholder"><img src="images/'
		+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
		+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
		+ dish[i].description +'</span></div>';

		this.dishes.prepend(html);
	};

	//END OF Planner.html---------------------------------------------

	//Recipe.html-----------------------------------------------------
	//----------------------------------------------------------------

	//Ingredients

	this.ingredients = this._elements.ingredients.find("#ingr");

	var dishForIngredients = this._model.getDish(1);	

	for (var i = 0; i < dishForIngredients.ingredients.length; i++) {
		
		var html1 = '<tr><td>'
		+ dishForIngredients.ingredients[i].quantity + " " + dishForIngredients.ingredients[i].unit +'</td><td>'
		+ dishForIngredients.ingredients[i].name + '</td><td>SEK</td><td>'
		+ dishForIngredients.ingredients[i].price + ' :-</td></tr>';

		this.ingredients.prepend(html1);
	};


	//END OF Recipe.html---------------------------------------------


			
}
