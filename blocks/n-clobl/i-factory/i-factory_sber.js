goog.provide('sv.iFactory.FactorySber');

goog.require('sv.iFactory.TemplateFactory');
goog.require('sv.lSberVmeste.SberVmeste');
goog.require('sv.lSberVmeste.View');
goog.require('sv.lSberVmeste.bHeaderManager.HeaderManager');
goog.require('sv.lSberVmeste.bHeaderManager.View');
goog.require('sv.lSberVmeste.bPageManager.PageManager');
goog.require('sv.lSberVmeste.bPageManager.View');
goog.require('sv.lSberVmeste.bNavPage1.NavPage1');
goog.require('sv.lSberVmeste.bNavPage1.View');
goog.require('sv.lSberVmeste.bNavPage2.NavPage2');
goog.require('sv.lSberVmeste.bNavPage2.View');
goog.require('sv.lSberVmeste.bNavPage3.NavPage3');
goog.require('sv.lSberVmeste.bNavPage3.View');
goog.require('cl.iFactory.Factory');

/**
 * FactoryAdventure
 * @constructor
 * @extends {cl.iFactory.Factory}
 */
sv.iFactory.FactorySber = function() {
    var templateFactory = sv.iFactory.TemplateFactory.getInstance();

    goog.base(this, templateFactory, 'sber');

    this.setControlListItem('SberVmeste', {
            control: sv.lSberVmeste.SberVmeste,
            view: sv.lSberVmeste.View
        })
        .setControlListItem('HeaderManager', {
            control: sv.lSberVmeste.bHeaderManager.HeaderManager,
            view: sv.lSberVmeste.bHeaderManager.View
        })
        .setControlListItem('Header', {
            control: sv.lSberVmeste.bHeader.Header,
            view: sv.lSberVmeste.bHeader.View
        })
        .setControlListItem('PageManager', {
            control: sv.lSberVmeste.bPageManager.PageManager,
            view: sv.lSberVmeste.bPageManager.View
        })
        .setControlListItem('NavPage1', {
            control: sv.lSberVmeste.bNavPage1.NavPage1,
            view: sv.lSberVmeste.bNavPage1.View
        })
        .setControlListItem('NavPage2', {
            control: sv.lSberVmeste.bNavPage2.NavPage2,
            view: sv.lSberVmeste.bNavPage2.View
        })
        .setControlListItem('NavPage3', {
            control: sv.lSberVmeste.bNavPage3.NavPage3,
            view: sv.lSberVmeste.bNavPage3.View
        })

};
goog.inherits(sv.iFactory.FactorySber, cl.iFactory.Factory);
goog.addSingletonGetter(sv.iFactory.FactorySber);


goog.scope(function() {
    var Factory = sv.iFactory.FactorySber;

    /**
     * Important!
     */
    Factory.getInstance().attachToManager();
});  // goog.scope
