function SelectorController(model, view) {
	
	this._model = model;
	this._view = view;

	var _this = this; 

    this._view.updateView();

	this._view.listModified.attach(function (sender, args) {
        _this.updateSelected(args.index);
    });

    this._view.searchButtonClicked.attach(function (sender, args) {
		_this.searchCourses(args.filter);
	});

    this._view.chooseDishButtonClicked.attach(function(e) {
        _this.link(e);
    });

}

SelectorController.prototype = {
	updateSelected: function (index) {
        this._model.setSelectedIndex(index);        
    },

    searchCourses: function(filter){
        console.log("controller");
    	this._model.getAllDishes(this._model.getSelectedIndex(), filter);    	
    },
    link: function (e){
        e.preventDefault();
        window.app.switchView('recipe', $(e.target).parents('a').attr('dishId'));
    }


};