var PrintView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	this.fullMenu = this._elements.print.find("#fullMenu");

	var dish = this._model.getAllDishes("starter", "");

	for (var i = 0; i < dish.length; i++) {

		var html =	'<div class="row col-xs-12 col-md-12"><hr><div class="spacer20"></div><div class="col-xs-12 col-md-2"><a href="#" class="thumbnail"><img class="img-thumbnail" src="images/'
					+ dish[i].image + '"></a></div><div class="col-xs-12 col-md-4"><h1 class="menu-title">'
					+ dish[i].name +'</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur nunc vel urna ornare, sed feugiat enim ultrices. Proin quis nulla turpis. Vivamus convallis quam quis sodales venenatis. Donec pharetra nunc non blandit lobortis. Cras purus libero, feugiat et tempus ac, hendrerit ac ex.</p></div><div class="col-xs-12 col-md-6"><h3>Preparation</h3><p>'
					+ dish[i].description + '</p></div></div>';

		this.fullMenu.prepend(html);
	};

	this.show =function() {
		this._elements.print.removeClass("hidden");
	};
	this.hide = function() {
		this._elements.print.addClass("hidden");
	};
}
