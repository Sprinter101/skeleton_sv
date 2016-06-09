goog.provide('sv.lSberVmeste.bPageManager.View');

goog.require('sv.lSberVmeste.bFirstPage.View');
goog.require('cl.iControl.View');



/**
 * sv.lSberVmeste.bPageManager.View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {cl.iControl.View}
 */
sv.lSberVmeste.bPageManager.View = function(opt_params,
                                           opt_template,
                                           opt_modifier) {
    goog.base(this, opt_params, opt_template, opt_modifier);

    this.setCssClass(sv.lSberVmeste.bPageManager.View.CssClass.ROOT);
};
goog.inherits(sv.lSberVmeste.bPageManager.View, cl.iControl.View);


goog.scope(function() {
    var View = sv.lSberVmeste.bPageManager.View,
        FirstView = sv.lSberVmeste.bFirstPage.View;

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-page-manager',
        PAGE_WRAP: 'b-page-manager__page-wrap'
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.dom.firstPage = this.getElementByClass(FirstView.CssClass.ROOT);
    };
});  // goog.scope
