function SelectorController(model, view) {
	
	this._model = model;
	this._view = view;

	var _this = this; 

	this._view.listModified.attach(function (sender, args) {
        _this.updateSelected(args.index);
    });


}

SelectorController.prototype = {
	updateSelected: function (index) {
        this._model.setSelectedIndex(index);        
    }
};