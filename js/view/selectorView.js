var SelectorView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	this._elements.selectDish.removeClass("hidden");

	//Main Part (Select Dish)
	//----------------------------------------------------------------
	//Choosing a course (dropdown menu)
	this.courseDropDown = this._elements.selectDish.find("#courses");

	/*	var selectedIndex = this.courseDropDown[0].options.selectedIndex;

	console.log(this.courseDropDown[0].options[selectedIndex].value);*/

	//EVENTS
	this.listModified = new Event(this);

	var _this = this;

	// attach listeners to HTML controls
	this.courseDropDown.change(function (e) {
		_this.listModified.notify({
			index: e.target.selectedIndex
		});
		_this.updateCourseList();		
	});

	this.updateCourseList();

	//Search Bar
	this.searchBarInputText = $("searchBarInputText");
	this.searchBarButton = $("searchBarButton");	

}

SelectorView.prototype = {
	updateCourseList: function () {
		
		this.dishes = this._elements.selectDish.find("#dishes");

		this.dishes.empty();

		var courseIndex = this._model.getSelectedIndex();

		if(courseIndex === 0)
		{
			var dish = this._model.getAllDishes("main dish", "");	
		}
		else if(courseIndex === 1)
		{
			var dish = this._model.getAllDishes("starter", "");	
		}
		else if(courseIndex === 2)
		{
			var dish = this._model.getAllDishes("dessert", "");
		}

		for (var i = 0; i < dish.length; i++) {		

			var html = '<div class="col-xs-6 col-sm-3 placeholder"><img src="images/'
			+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
			+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish[i].description +'</span></div>';

			this.dishes.prepend(html);
		};

	}

};
