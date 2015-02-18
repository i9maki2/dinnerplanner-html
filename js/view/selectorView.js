var SelectorView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	this._elements.selectDish.removeClass("hidden");

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

		var dish = this._model.getAllDishes("main dish", "");

	for (var i = 0; i < dish.length; i++) {		

		var html = '<div class="col-xs-6 col-sm-3 placeholder"><img src="images/'
		+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
		+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
		+ dish[i].description +'</span></div>';

		this.dishes.prepend(html);
	};
}
