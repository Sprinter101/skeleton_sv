goog.provide('sv.lSberVmeste.bNavPage3.View');

goog.require('cl.iControl.View');

sv.lSberVmeste.bNavPage3.View = function(opt_params, opt_template, opt_modifier) {    
    goog.base(this, opt_params, opt_template, opt_modifier);

    this.setCssClass(sv.lSberVmeste.bNavPage3.View.CssClass.ROOT);
};
goog.inherits(sv.lSberVmeste.bNavPage3.View, cl.iControl.View);

goog.scope(function() {
    var View = sv.lSberVmeste.bNavPage3.View

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-page-3',
        AJAX_CONT: 'b-page-3__ajax-cont'
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.dom.ajaxCont = this.getElementByClass(View.CssClass.AJAX_CONT)
    };
});  // goog.scope