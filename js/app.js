$(function() {

  var model = new DinnerModel(),
        view = new DinnerView(model, {'dinnerView': $('#dinnerView'), 
        							  'selectDish': $('#selectDish'), 
        							  'ingredients': $('#ingredients'),       							  
        							 }),
        controller = new DinnerController(model, view);
});