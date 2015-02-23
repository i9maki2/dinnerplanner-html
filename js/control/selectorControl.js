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

    this._view.dishSelectedClicked.attach(function () {
        _this.redirectTo();
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
    redirectTo: function (){
        console.log("WTF?");
        window.app.changeView('recipe');
    }


};