var SelectorView = function(model, elements)
{
	this._model = model;
	this._elements = elements;

	//Course Dropdown Menu
	this.courseDropDown = this._elements.selectDish.find("#courses");

	//Search Bar
	this.searchBarInputText = this._elements.selectDish.find("#searchBarInputText");
	this.searchBarButton = this._elements.selectDish.find("#searchBarButton");

	//EVENTS
	this.listModified = new Event(this);
	this.searchButtonClicked = new Event(this);
	this.chooseDishButtonClicked = new Event(this);

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
		//Load Course List On Page Load
		this.updateCourseList();
		this.seacrhCurrentCourseList();
	};

}

SelectorView.prototype = {
	updateCourseList: function (dish1) {
		this.dishes = this._elements.selectDish.find("#dishes");

			console.log(dish1);		

			var html = '<div class="col-xs-6 col-sm-3 placeholder"><a href="" style="text-decoration: none" id="'
			+ "dishId"+ '"> <img src="images/'
			+ dish1.image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
			+ dish1.name +'</h4><span class="text-muted" style="font-size: 14px">'
			+ dish1.description +'</span></a></div>';

			this.dishes.append(html);
		
	},

	seacrhCurrentCourseList: function (searchQuery){
		this.dishyyy = this._elements.selectDish.find("#dishId");
		//console.log(this.dishyyy);

		var _this = this;

		//EVENT
		this.dishSelectedClicked = new Event(this);

		// attach listeners to HTML controls  
		this.dishyyy.click(function () {
		_this.dishSelectedClicked.notify();
		});
	},

	update: function() {
	    this._elements.selectDish.find("#dishes").html('');

	    var courseIndex = this._model.getSelectedIndex();
	    var dish = 0;

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

	    _.each(model.getAllDishes(dish).toArray(), function(dish1) {
	      this.updateCourseList(dish1);
	    }, this);
  	}

};


