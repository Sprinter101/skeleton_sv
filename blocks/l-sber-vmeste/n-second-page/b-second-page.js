goog.provide('sv.lSberVmeste.bSecondPage.SecondPage');

goog.require('sv.gButton.Button');
goog.require('sv.lSberVmeste.bSecondPage.View');
goog.require('sv.lSberVmeste.iPage.Page');
goog.require('sv.lSberVmeste.iRouter.Route');
goog.require('sv.lSberVmeste.iRouter.Router');



/**
 * sv.lSberVmeste.bSecondPage.SecondPage control
 * @param {sb.lSberVmeste.bSecondPage.View} view View used to render or
 *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
 *     document interaction.
 * @constructor
 * @extends {sv.lSberVmeste.iPage.Page}
 */
sv.lSberVmeste.bSecondPage.SecondPage = function(view, opt_domHelper) {
    goog.base(this, view, opt_domHelper);

    /**
     * Second page instance
     * @type {cl.gButton.Button}
     * @private
     */
    this.firstButton_ = null;
};
goog.inherits(sv.lSberVmeste.bSecondPage.SecondPage, sv.lSberVmeste.iPage.Page);


goog.scope(function() {
    var Page = sv.lSberVmeste.bSecondPage.SecondPage,
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

        this.firstButton_ = this.decorateChild(
            'button',
            this.getView().getDom().firstButton
        );
    };

    /**
     * @override
     */
    Page.prototype.enterDocument = function() {
        goog.base(this, 'enterDocument');

        this.getHandler().listen(
            this.firstButton_,
            Button.Event.CLICK,
            this.onFirstButtonClick
        );
    };

    /**
     * on test button click
     * @protected
     */
    Page.prototype.onFirstButtonClick = function() {
        Router.getInstance().changeLocation(Route.FIRST);
    };

});  // goog.scope
