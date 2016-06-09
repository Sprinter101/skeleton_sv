goog.provide('sv.iFactory.FactorySber');


goog.require('sv.iFactory.TemplateFactory');
goog.require('sv.lSberVmeste.SberVmeste');
goog.require('sv.lSberVmeste.View');
// goog.require('aa.lActiveAge.bAaCardInput.CardInput');
// goog.require('aa.lActiveAge.bAaCardInput.View');
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
        // .setControlListItem('CardInput', {
        //     control: aa.lActiveAge.bAaCardInput.CardInput,
        //     view: aa.lActiveAge.bAaCardInput.View
        // })
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
