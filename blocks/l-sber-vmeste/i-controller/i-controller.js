goog.provide('sv.lSberVmeste.iController.Controller');



/**
 * Application controller
 * @param {{
 *     pageManager: sv.lSberVmeste.bPageManager.PageManager
 * }} params
 * @constructor
 */
sv.lSberVmeste.iController.Controller = function(params) {
    this.pageManager_ = params.pageManager;
};


goog.scope(function() {
    var Controller = sv.lSberVmeste.iController.Controller;
        
    /**
     * 'first' action
     */
    Controller.prototype.actionFirst = function() {
        this.pageManager_.setCurrentPage('FirstPage');
    };

    /**
     * 'second' action
     */
    Controller.prototype.actionSecond = function() {
        this.pageManager_.setCurrentPage('SecondPage');
    };

});  // goog.scope
