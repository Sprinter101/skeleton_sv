goog.provide('sv.lSberVmeste.bNavPage1.View');

goog.require('cl.iControl.View');

/**
 * sv.lSberVmeste.bNavPage1.View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {cl.iControl.View}
*/
sv.lSberVmeste.bNavPage1.View = function(opt_params, opt_template, opt_modifier) {
    goog.base(this, opt_params, opt_template, opt_modifier);

    this.setCssClass(sv.lSberVmeste.bNavPage1.View.CssClass.ROOT);
};
goog.inherits(sv.lSberVmeste.bNavPage1.View, cl.iControl.View);

goog.scope(function() {
    var View = sv.lSberVmeste.bNavPage1.View

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-page-1',
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);
    };
});  // goog.scope