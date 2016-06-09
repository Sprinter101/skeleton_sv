goog.provide('sv.lSberVmeste.SberVmeste');


goog.require('cl.iControl.Control');

/**
 * aa.lActiveAge.ActiveAge control
 * @param {aa.lActiveAge.View} view View used to render or
 *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
 *     document interaction.
 * @constructor
 * @extends {cl.iControl.Control}
 */
sv.lSberVmeste.SberVmeste = function(view, opt_domHelper) {
	goog.base(this, view, opt_domHelper);
};
goog.inherits(sv.lSberVmeste.SberVmeste, cl.iControl.Control);

goog.scope(function() {
	var SberVmeste = sv.lSberVmeste.SberVmeste;

	SberVmeste.prototype.decorateInternal = function(element) {
		goog.base(this, 'decorateInternal', element);

		this.headerManager_ = this.decorateChild(
			'HeaderManager',
			this.getView().getDom().headerManager
		);
	}

	SberVmeste.prototype.enterDocument = function() {
		//
	};
});