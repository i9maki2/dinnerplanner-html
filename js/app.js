$(function() {

  var model = new DinnerModel(),
        view = new DinnerView(model, {'dinnerView': $('#dinnerView'), 
        							  'selectDish': $('#selectDish'),         							        							 
        							 }),
        selectorView = new SelectorView(model, {'selectDish': $('#selectDish')}),
        sidebarView = new SidebarView(model, {'sidebar': $('#sidebar')}),
        recipeView = new RecipeView(model, {'selectedDish': $('#selectedDish'),
    										'ingredients': $('#ingredients'),}),
        controller = new DinnerController(model, view);
});