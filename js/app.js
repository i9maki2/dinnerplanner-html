var DinnerApp = function(model){

	var views = {      
		selectorView: new SelectorView(model, {'selectDish': $('#selectDish')}),
		sidebarView: new SidebarView(model, {'sidebar': $('#sidebar')}),
		recipeView: new RecipeView(model, {'recipe': $('#recipe'),'ingredients': $('#ingredients'),}),
		menuView: new MenuView(model, {'menu': $('#menu')}),
		printView: new PrintView(model, {'print': $('#print')}),
	};

	var contollers = {
		selectorController: new SelectorController(model, views.selectorView),
		sideBarController: new DinnerController(model, views.sidebarView),
		menuController: new MenuController(model, views.menuView),
		printController: new PrintController(model, views.printView),
		recipeController: new RecipeController(model, views.recipeView)        
    };

    var toShow = {
    	selector: function() {
    		this.hideAll();
    		views.selectorView.show();
    		views.sidebarView.show();                   
    	},
    	recipe: function(choice) {
    		this.hideAll();
    		views.recipeView.show();
    		views.sidebarView.show();
            contollers.recipeController.reciveDish(choice);          
    	},
    	menu: function() {
    		this.hideAll();
    		views.menuView.show();          
    	},
    	print: function() {
    		this.hideAll();
    		views.printView.show();          
    	},
    	hideAll: function() {
    		_.each(views, function(v, i) {          	
    			v.hide();
    		});
    	}
    };

    this.changeView = function(view, choice) {
    	toShow[view](choice);
    };
};

$(function() {	
	var model = new DinnerModel();
  
      model.addDishToMenu(1);
      model.addDishToMenu(3);
      model.addDishToMenu(100);
      model.addDishToMenu(201);
      model.setNumberOfGuests(2);

	window.app = new DinnerApp(model);
	app.changeView('selector');
});