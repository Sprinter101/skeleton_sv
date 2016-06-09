goog.provide('sv.lSberVmeste.View');

//goog.require('sv.lSberVmeste.bHeaderManager.View');
goog.require('sv.lSberVmeste.bPageManager.View');
goog.require('cl.iControl.View');
goog.require('goog.dom.dataset');
goog.require('goog.object');



/**
 * sv.lSberVmeste.View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {cl.iControl.View}
 */
sv.lSberVmeste.View = function(opt_params, opt_template, opt_modifier) {
    goog.base(this, opt_params, opt_template, opt_modifier);

    this.setCssClass(sv.lSberVmeste.View.CssClass.ROOT);
};
goog.inherits(sv.lSberVmeste.View, cl.iControl.View);


goog.scope(function() {
    var View = sv.lSberVmeste.View,
       // HeaderManagerView = sb.lSberVmeste.bHeaderManager.View,
        PageManagerView = sv.lSberVmeste.bPageManager.View,
        dataset = goog.dom.dataset;

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'l-sber-vmeste'
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

       /* this.dom.headerManager = this.getElementByClass(
            HeaderManagerView.CssClass.ROOT
        );*/

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

    /**
     * @override
     */
    View.prototype.getParams = function() {
        if (goog.object.isEmpty(this.params)) {
            var element = this.getElement();
            if (element) {
                var dataParams = dataset.get(element, 'params');
                this.params = JSON.parse(dataParams);
            }
        }

        return this.params;
    };

    /**
     * Get url of api
     * @return {String}
     */
    View.prototype.getApiUrl = function() {
        var params = this.getParams();
        return params['apiUrl'];
    };
});  // goog.scope
