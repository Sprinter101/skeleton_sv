goog.provide('sv.lSberVmeste.View');

goog.require('sv.lSberVmeste.bHeaderManager.View');
goog.require('sv.lSberVmeste.bPageManager.View');
goog.require('cl.iControl.View');


sv.lSberVmeste.View = function(opt_params, opt_template, opt_modifier) {
	goog.base(this, opt_params, opt_template, opt_modifier);

	this.setCssClass(sv.lSberVmeste.View.CssClass.ROOT);
};
goog.inherits(sv.lSberVmeste.View, cl.iControl.View);

goog.scope(function() {
	var View = sv.lSberVmeste.View,
    HeaderManagerView = sv.lSberVmeste.bHeaderManager.View;
    PageManagerView = sv.lSberVmeste.bPageManager.View;

	View.CssClass = {
		ROOT: 'l-sber-vmeste'
	};

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.dom.headerManager = this.getElementByClass(
            HeaderManagerView.CssClass.ROOT
        );

        this.dom.pageManager = this.getElementByClass(
            PageManagerView.CssClass.ROOT
        );
    };

    /**
     * @override
     */
    View.prototype.enterDocument = function() {
        goog.base(this, 'enterDocument');
    };
});