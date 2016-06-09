goog.provide('sv.iFactory.TemplateFactory');
goog.provide('sv.iFactory.TemplateFactory.INSTANCE');

goog.require('sv.lSberVmeste.Template');
goog.require('sv.lSberVmeste.iPage.Template');
goog.require('sv.lSberVmeste.bPageManager.Template');
goog.require('sv.lSberVmeste.bFirstPage.Template');
goog.require('sv.lSberVmeste.bSecondPage.Template');
goog.require('sv.gButton.Template');
goog.require('cl.iFactory.TemplateFactory');

/**
 * Template factory
 * @constructor
 */
sv.iFactory.TemplateFactory = function() {
    goog.base(this, 'sber');

    this.setTemplateListItem(
            'SberVmeste',
            sv.lSberVmeste.Template.sberVmeste)
        .setTemplateListItem(
            'PageManager',
            sv.lSberVmeste.bPageManager.Template.pageManager)
         .setTemplateListItem(
                'Page',
                sv.lSberVmeste.iPage.Template.page)
        .setTemplateListItem(
                'FirstPage',
                sv.lSberVmeste.bFirstPage.Template.page)
        .setTemplateListItem(
                'SecondPage',
                sv.lSberVmeste.bSecondPage.Template.page)
        .setTemplateListItem(
                'ButtonSber',
                sv.gButton.Template.button
            );
};
goog.inherits(sv.iFactory.TemplateFactory, cl.iFactory.TemplateFactory);
goog.addSingletonGetter(sv.iFactory.TemplateFactory);

goog.scope(function() {
    var TemplateFactory = sv.iFactory.TemplateFactory;

    /**
     * Instance
     */
    TemplateFactory.INSTANCE = TemplateFactory.getInstance();

    /**
     * Important!
     */
    TemplateFactory.getInstance().attachToManager();
});  // goog.scope
