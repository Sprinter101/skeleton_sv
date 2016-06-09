goog.provide('sv.gButton.View');

goog.require('cl.gButton.View');
goog.require('goog.dom');



/**
 * Sber Vmeste button view.
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {cl.gButton.View}
 */
sv.gButton.View = function(opt_params, opt_template, opt_modifier) {
    goog.base(this, opt_params, opt_template, opt_modifier);

};
goog.inherits(sv.gButton.View, cl.gButton.View);


goog.scope(function() {
    var View = sv.gButton.View;

    /**
     * Css class enum.
     * @enum {string}
     */
    View.CssClass = {
    };

    /**
     * Event enum
     * @enum {string}
     */
    View.Event = {
      CLICK: cl.gButton.View.Event.CLICK,
      //TOUCH_START: cl.gButton.View.Event.TOUCH_START,
      //TOUCH_END: cl.gButton.View.Event.TOUCH_END
    };

}); //goog.scope