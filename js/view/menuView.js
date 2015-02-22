var MenuView = function(model, elements)
{
	this._model = model;
	this._elements = elements;		

	this.dishes = this._elements.menu.find("#dishes");	

	var dish = this._model.getAllDishes("starter", "");

	for (var i = 0; i < dish.length; i++) {

		var html = '<div class="col-xs-6 col-sm-3 placeholder"><img src="images/'
		+ dish[i].image +'" alt="..." class="img-thumbnail" style="max-height:200px; max-width:200px;"><h4>'
		+ dish[i].name +'</h4><span class="text-muted" style="font-size: 14px">'
		+ dish[i].description +'</span></div>';

		this.dishes.prepend(html);
	};

	this.show =function() {
		this._elements.menu.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.menu.addClass("hidden");
	};
}