$(function() {

	//We instantiate our model
	var dinnerModel = new DinnerModel();
	
	//And create the needed controllers and views
	var dinnerView = new DinnerView($("#dinnerView"));
	var dinnerController = new DinnerController(dinnerModel, dinnerView);

});