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
}

DinnerController.prototype = {
	addGuest: function () {
		//We should add some cool animation
		var currentGuests = this._model.getNumberOfGuests();	        
		this._model.setNumberOfGuests(currentGuests + 1);			
	},

	removeGuest: function () {			
        //We should add some cool animation
        var currentGuests = this._model.getNumberOfGuests();	        
        this._model.setNumberOfGuests(currentGuests - 1);	        	        
    },
    confirmDinner: function(){    	
		window.app.changeView('menu');
    },
};
