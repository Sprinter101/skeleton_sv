goog.provide('sv.lSberVmeste.bSecondPage.View');

goog.require('sv.lSberVmeste.iPage.View');
goog.require('cl.gButton.View');



/**
 * sv.lSberVmeste.bSecondPage.View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {sv.lSberVmeste.iPage.View}
 */
sv.lSberVmeste.bSecondPage.View = function(opt_params, opt_template, opt_modifier)
{
    goog.base(this, opt_params, opt_template, opt_modifier);
};
goog.inherits(sv.lSberVmeste.bSecondPage.View, sv.lSberVmeste.iPage.View);


goog.scope(function() {
    var View = sv.lSberVmeste.bSecondPage.View;

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-login-page',
        FIRST_BUTTON: 'b-second-page__first-button',
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.dom.firstButton = this.getElementByClass(
            View.CssClass.FIRST_BUTTON
        );
    };
});  // goog.scope
