goog.provide('sv.lSberVmeste.bNavPage3.NavPage3');

goog.require('cl.iControl.Control');
goog.require('sv.lSberVmeste.iRequest.Request');



/**
 * sv.lSberVmeste.bNavPage3.NavPage3 control
 * @param {} view View used to render or
 *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
 *     document interaction.
 * @constructor
 * @extends {cl.iControl.Control}
 */
sv.lSberVmeste.bNavPage3.NavPage3 = function(view, opt_domHelper) {
    goog.base(this, view, opt_domHelper);

    this.ajaxCont = null;
};
goog.inherits(sv.lSberVmeste.bNavPage3.NavPage3, cl.iControl.Control);


goog.scope(function() {
    var NavPage3 = sv.lSberVmeste.bNavPage3.NavPage3,
    Request = sv.lSberVmeste.iRequest.Request;

    NavPage3.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);
    }

    NavPage3.prototype.enterDocument = function() {
        goog.base(this, 'enterDocument');

        this.ajaxCont = this.getView().getDom().ajaxCont;

        this.sendTestRequest_();
    }

    NavPage3.prototype.sendTestRequest_ = function() {
        var that = this;

        Request.getInstance().send({
            url: 'test',
            success: function(data, status) {
                //console.log('success', data, status);
                that.ajaxCont.innerText = String(data);
            },
            error: function(data, status, error) {
                console.log('error', data, status, error);
            }
        });
    }
});  // goog.scope