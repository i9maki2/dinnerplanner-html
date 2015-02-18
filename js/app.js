$(function() {

  var model = new DinnerModel(),

  		//Views        
        selectorView = new SelectorView(model, {'selectDish': $('#selectDish')}),
        sidebarView = new SidebarView(model, {'sidebar': $('#sidebar')}),
        recipeView = new RecipeView(model, {'recipe': $('#recipe'),'ingredients': $('#ingredients'),}),
        menuView = new MenuView(model, {'menu': $('#menu')}),
        printView = new PrintView(model, {'print': $('#print')}),

        controller = new DinnerController(model, view);
});