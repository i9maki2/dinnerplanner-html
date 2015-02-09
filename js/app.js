$(function() {

  var model = new DinnerModel(),
        view = new DinnerView(model, {'dinnerView': $('#dinnerView')}),
        controller = new DinnerController(model, view);
});