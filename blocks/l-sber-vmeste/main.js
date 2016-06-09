//goog.provide('aa.lActiveAge.Main');
goog.provide('sv.lSberVmeste.Main');

//goog.require('aa.iFactory.FactoryAge');
goog.require('sv.iFactory.FactorySber');
//goog.require('aa.lActiveAge.ActiveAge');
goog.require('sv.lSberVmeste.SberVmeste');
//goog.require('aa.lActiveAge.View');
goog.require('sv.lSberVmeste.View');
goog.require('goog.dom');

/**
 * Main app class
 * @constructor
 */
sv.lSberVmeste.Main = function() {};


goog.scope(function() {
    var Main = sv.lSberVmeste.Main,
        SberVmesteView = sv.lSberVmeste.View,
        FactorySber = sv.iFactory.FactorySber;


    /**
     * Run app
     */
    Main.prototype.run = function() {
        window.location.href = '#login';
        var elem = goog.dom.getElementByClass(SberVmesteView.CssClass.ROOT);
        FactorySber.getInstance().decorate('SberVmeste', elem);
    };


    var main = new Main();
    main.run();
});  // goog.scope