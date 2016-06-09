goog.provide('sv.lSberVmeste.SberVmeste');

goog.require('sv.lSberVmeste.iRouter.Route');
goog.require('sv.lSberVmeste.iRouter.Router');
goog.require('cl.iControl.Control');

/**
 * aa.lActiveAge.ActiveAge control
 * @param {aa.lActiveAge.View} view View used to render or
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
        Route = sv.lSberVmeste.iRouter.Route,
        Router = sv.lSberVmeste.iRouter.Router,
        Controller = sv.lSberVmeste.iController.Controller,;

	SberVmeste.prototype.decorateInternal = function(element) {
		goog.base(this, 'decorateInternal', element);

		this.headerManager_ = this.decorateChild(
			'HeaderManager',
			this.getView().getDom().headerManager
		);

		this.router_ = Router.getInstance();

		this.controller_ = new Controller({
		    headerManager: this.headerManager_,
		    pageManager: this.pageManager_
		});
	}

	SberVmeste.prototype.enterDocument = function() {
		this.initRouting_();
	};

    ActiveAge.prototype.initRouting_ = function() {
        var controller = this.controller_;

        this.router_.enable();
        this.initRoute_(Route.TAB1, controller.actionTab1);
        this.initRoute_(Route.TAB2, controller.actionTab2);
        this.initRoute_(Route.TAB3, controller.actionTab3);
    };

    ActiveAge.prototype.initRoute_ = function(route, action) {
        this.router_.use(route, action.bind(this));
    }

});