var DinnerApp = function(model){

	var views = {      
		selectorView: new SelectorView(model, {'selectDish': $('#selectDish')}),
		sidebarView: new SidebarView(model, {'sidebar': $('#sidebar')}),
		recipeView: new RecipeView(model, {'recipe': $('#recipe'),'ingredients': $('#ingredients'),'dish': $('#dish')}),
		menuView: new MenuView(model, {'menu': $('#menu')}),
		printView: new PrintView(model, {'print': $('#print')}),
        indexView: new IndexView(model, {'index': $('#index')}),
	};

	var contollers = {
		selectorController: new SelectorController(model, views.selectorView),
		sideBarController: new DinnerController(model, views.sidebarView),
		menuController: new MenuController(model, views.menuView),
		printController: new PrintController(model, views.printView),
		recipeController: new RecipeController(model, views.recipeView),
        indexController: new IndexController(model, views.indexView),        
    };

    var toShow = {
        index: function() {
            this.hideAll();
            views.indexView.show();            
        },
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

	window.app = new DinnerApp(model);
	app.changeView('index');
});