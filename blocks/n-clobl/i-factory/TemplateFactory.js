goog.provide('sv.iFactory.TemplateFactory');
goog.provide('sv.iFactory.TemplateFactory.INSTANCE');

goog.require('sv.lSberVmeste.Template');
goog.require('sv.lSberVmeste.bInnerTemplate.Template')
goog.require('cl.iFactory.TemplateFactory');

/**
 * Template factory
 * @constructor
 */
sv.iFactory.TemplateFactory = function() {
    goog.base(this, 'sber');

    this
        .setTemplateListItem(
            'SberVmeste',
            sv.lSberVmeste.Template.sberVmeste
        )
        .setTemplateListItem(
            'InnerTemplate',
            sv.lSberVmeste.bInnerTemplate.Template.inner
        )
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
