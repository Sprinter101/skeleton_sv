goog.provide('sv.lSberVmeste.bFirstPage.FirstPage');

goog.require('sv.gButton.Button');
goog.require('sv.lSberVmeste.bFirstPage.View');
goog.require('sv.lSberVmeste.iPage.Page');
goog.require('sv.lSberVmeste.iRouter.Route');
goog.require('sv.lSberVmeste.iRouter.Router');



/**
 * sv.lSberVmeste.bFirstPage.FirstPage control
 * @param {sv.lSberVmeste.bFirstPage.View} view View used to render or
 *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
 *     document interaction.
 * @constructor
 * @extends {sv.lSberVmeste.iPage.Page}
 */
sv.lSberVmeste.bFirstPage.FirstPage = function(view, opt_domHelper) {
    goog.base(this, view, opt_domHelper);

    /**
     * Second page instance
     * @type {cl.gButton.Button}
     * @private
     */
    this.secondButton_ = null;
};
goog.inherits(sv.lSberVmeste.bFirstPage.FirstPage, sv.lSberVmeste.iPage.Page);


goog.scope(function() {
    var Page = sv.lSberVmeste.bFirstPage.FirstPage,
        Router = sv.lSberVmeste.iRouter.Router,
        Route = sv.lSberVmeste.iRouter.Route,
        Button = sv.gButton.Button;

    /**
     * Event enum
     * @enum {string}
     */
    Page.Event = {

    };

    /**
     * @override
     * @param {Element} element
     */
    Page.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.secondButton_ = this.decorateChild(
            'button',
            this.getView().getDom().secondButton
        );
    };

    /**
     * @override
     */
    Page.prototype.enterDocument = function() {
        goog.base(this, 'enterDocument');

        this.getHandler().listen(
            this.secondButton_,
            Button.Event.CLICK,
            this.onSecondButtonClick
        );
    };

    /**
     * on test button click
     * @protected
     */
    Page.prototype.onSecondButtonClick = function() {
        Router.getInstance().changeLocation(Route.SECOND);
    };

});  // goog.scope
