var SelectorView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	//Course Dropdown Menu
	this.courseDropDown = this._elements.selectDish.find("#courses");

	//Search Bar
	this.searchBarInputText = this._elements.selectDish.find("#searchBarInputText");
	this.searchBarButton = this._elements.selectDish.find("#searchBarButton");		

	/*	var selectedIndex = this.courseDropDown[0].options.selectedIndex;

	console.log(this.courseDropDown[0].options[selectedIndex].value);*/

	//EVENTS
	this.listModified = new Event(this);
	this.searchButtonClicked = new Event(this);

	var _this = this;

	// attach MODEL listeners
	this._model.searchCourses.attach(function () {
		_this.seacrhCurrentCourseList(this.searchBarInputText[0].value);
	});

	// attach listeners to HTML controls
	this.courseDropDown.change(function (e) {
		_this.listModified.notify({
			index: e.target.selectedIndex
		});
		_this.updateCourseList();		
	});	

	// attach listeners to HTML controls  
	this.searchBarButton.click(function (e) {				
		_this.searchButtonClicked.notify({
			filter: e.target.filter
		});
		_this.seacrhCurrentCourseList(e.target.filter);
	});

	this.show = function() {
		this._elements.selectDish.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.selectDish.addClass("hidden");
	};

	this.updateView = function(){
		this._elements.selectDish.find("#dishes").html('');
		//Load Course List On Page Load
		this.updateCourseList();
	};

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

			var html = '<div class="col-xs-6 col-sm-3 placeholder"><a href="'
			+  +'" id="'
			+ dish[i].id + '"><img src="images/'
			+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"></a><h4>'
			+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish[i].description +'</span></div>';

			this.dishes.append(html);
		};
	},

	seacrhCurrentCourseList: function (searchQuery){
		this.dishes = this._elements.selectDish.find("#dishes");

		this.dishes.empty();

		var courseIndex = this._model.getSelectedIndex();

		if(courseIndex === 0)
		{
			var dish = this._model.getAllDishes("main dish", searchQuery);	
		}
		else if(courseIndex === 1)
		{
			var dish = this._model.getAllDishes("starter", searchQuery);	
		}
		else if(courseIndex === 2)
		{
			var dish = this._model.getAllDishes("dessert", searchQuery);
		}

		for (var i = 0; i < dish.length; i++) {		

			var html = '<div class="col-xs-6 col-sm-3 placeholder"><img src="images/'
			+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
			+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish[i].description +'</span></div>';

			this.dishes.append(html);
		};

	},

};


