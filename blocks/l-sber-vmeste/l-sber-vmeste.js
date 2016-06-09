goog.provide('sv.lSberVmeste.SberVmeste');

goog.require('sv.lSberVmeste.View');
goog.require('sv.lSberVmeste.iController.Controller');
goog.require('sv.lSberVmeste.iRequest.Request');
goog.require('sv.lSberVmeste.iRouter.Route');
goog.require('sv.lSberVmeste.iRouter.Router');
goog.require('cl.iControl.Control');
goog.require('cl.iFactory.FactoryManager');



/**
 * sv.lSberVmeste.SberVmeste control
 * @param {sv.lSberVmeste.View} view View used to render or
 *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
 *     document interaction.
 * @constructor
 * @extends {cl.iControl.Control}
 */
sv.lSberVmeste.SberVmeste = function(view, opt_domHelper) {
    goog.base(this, view, opt_domHelper);
};
goog.inherits(sv.lSberVmeste.SberVmeste, cl.iControl.Control);

goog.scope(function() {
    var SberVmeste = sv.lSberVmeste.SberVmeste,
        Request = sv.lSberVmeste.iRequest.Request,
        Router = sv.lSberVmeste.iRouter.Router,
        Route = sv.lSberVmeste.iRouter.Route,
        clRouter = cl.iRouter.Router,
        Controller = sv.lSberVmeste.iController.Controller,
        View = sv.lSberVmeste.View;

    /**
     * Event enum
     * @enum {string}
     */
    SberVmeste.Event = {

    };

    /**
     * @override
     * @param {Element} element
     */
    SberVmeste.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        /*this.headerManager_ = this.decorateChild(
            'HeaderManager',
            this.getView().getDom().headerManager
        );*/

        this.pageManager_ = this.decorateChild(
            'PageManager',
            this.getView().getDom().pageManager
        );

        this.router_ = Router.getInstance();

        this.controller_ = new Controller({
            //headerManager: this.headerManager_,
            pageManager: this.pageManager_
        });

        /*this.request_ = Request.getInstance();
        this.request_.init({
            baseUrl: this.getView().getApiUrl()
        });*/
    };

    /**
     * @override
     */
    SberVmeste.prototype.enterDocument = function() {
        this.initRouting_();
    };

    /**
     * Init app routing (attaching handlers to routs)
     * @private
     */
    SberVmeste.prototype.initRouting_ = function() {
        var controller = this.controller_;

        this.router_.enable();
        this.initRoute_(Route.FIRST, controller.actionFirst);
        this.initRoute_(Route.SECOND, controller.actionSecond);
    };

    /**
     * Attach handler to url
     * @param {String} route
     * @param {Function} action
     * @private
     */
    SberVmeste.prototype.initRoute_ = function(route, action) {
        this.router_.use(route, action.bind(this));
    };

}); //goog.scope