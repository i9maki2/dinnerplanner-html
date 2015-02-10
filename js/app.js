$(function() {

  var model = new DinnerModel(),
        view = new DinnerView(model, {'dinnerView': $('#dinnerView'), 
        							  'selectDish': $('#selectDish'),        							  
        							 }),
        controller = new DinnerController(model, view);
});