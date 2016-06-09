goog.provide('sv.lSberVmeste.bFirstPage.View');

goog.require('sv.lSberVmeste.iPage.View');
goog.require('cl.gButton.View');



/**
 * sv.lSberVmeste.bFirstPage.View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {sv.lSberVmeste.iPage.View}
 */
sv.lSberVmeste.bFirstPage.View = function(opt_params, opt_template, opt_modifier)
{
    goog.base(this, opt_params, opt_template, opt_modifier);
};
goog.inherits(sv.lSberVmeste.bFirstPage.View, sv.lSberVmeste.iPage.View);


goog.scope(function() {
    var View = sv.lSberVmeste.bFirstPage.View;

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-first-page',
        SECOND_BUTTON: 'b-first-page__second-button',
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.dom.secondButton = this.getElementByClass(
            View.CssClass.SECOND_BUTTON
        );
    };
});  // goog.scope
