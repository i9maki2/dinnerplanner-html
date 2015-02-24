function DinnerController(model, view) {

	this._model = model;
	this._view = view;

	var _this = this;   

	this._view.plusButtonClicked.attach(function () {
		_this.addGuest();
	});

	this._view.minusButtonClicked.attach(function () {
		_this.removeGuest();
	});

	this._view.confirmDinnerButtonClicked.attach(function() {
    	_this.confirmDinner();
  	});
  	this._view.removeDishFromMenu.click(function (e) {
  		//Not Working
  		//console.log($(e.target).parents('a').attr('dishId'));
        _this.removeDish(e);
    });
}

DinnerController.prototype = {
	addGuest: function () {		
		var currentGuests = this._model.getNumberOfGuests();	        
		this._model.setNumberOfGuests(currentGuests + 1);			
	},
	removeGuest: function () {			        
        var currentGuests = this._model.getNumberOfGuests();	        
        this._model.setNumberOfGuests(currentGuests - 1);	        	        
    },
    confirmDinner: function(){    	
		window.app.changeView('menu');
    },
    removeDish: function(e)
    {
    	//Not Working (dish is missing)
    	//console.log(e);
    	//this._model.removeDishFromMenu(parseInt(dish)); 

    },
};
