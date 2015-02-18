var PrintView = function(model, elements)
{
	this._model = model;
	this._elements = elements;	

	this._elements.print.removeClass("hidden");
}