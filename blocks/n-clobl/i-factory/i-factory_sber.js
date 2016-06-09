goog.provide('sv.iFactory.FactorySber');

goog.require('sv.gButton.Button');
goog.require('sv.gButton.View');
goog.require('sv.lSberVmeste.bPageManager.PageManager');
goog.require('sv.lSberVmeste.bPageManager.View');
goog.require('sv.lSberVmeste.bFirstPage.FirstPage');
goog.require('sv.lSberVmeste.bFirstPage.View');
goog.require('sv.lSberVmeste.bSecondPage.SecondPage');
goog.require('sv.lSberVmeste.bSecondPage.View');
goog.require('sv.lSberVmeste.iPage.Page');
goog.require('sv.lSberVmeste.iPage.View');
goog.require('sv.iFactory.TemplateFactory');
goog.require('sv.lSberVmeste.SberVmeste');
goog.require('sv.lSberVmeste.View');
goog.require('sv.iFactory.TemplateFactory');
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
    .setControlListItem('PageManager', {
            control: sv.lSberVmeste.bPageManager.PageManager,
            view: sv.lSberVmeste.bPageManager.View
        })
    .setControlListItem('Page', {
            control: sv.lSberVmeste.iPage.Page,
            view: sv.lSberVmeste.iPage.View
        })
    .setControlListItem('FirstPage', {
            control: sv.lSberVmeste.bFirstPage.FirstPage,
            view: sv.lSberVmeste.bFirstPage.View
        })
    .setControlListItem('SecondPage', {
            control: sv.lSberVmeste.bSecondPage.SecondPage,
            view: sv.lSberVmeste.bSecondPage.View
        })
    .setControlListItem('ButtonSber', {
            control: sv.gButton.Button,
            view: sv.gButton.View
        });
        
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
