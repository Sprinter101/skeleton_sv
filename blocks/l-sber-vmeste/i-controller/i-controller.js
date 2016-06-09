goog.provide('aa.lActiveAge.iController.Controller');

goog.require('aa.lActiveAge.bLoyaltyCardListPage.LoyaltyCardListPage');
goog.require('aa.lActiveAge.bLoyaltyFullCardPage.LoyaltyFullCardPage');
goog.require('goog.object');



/**
 * Application controller
 * @param {{
 *     headerManager: aa.lActiveAge.bHeaderManager.HeaderManager,
 *     pageManager: aa.lActiveAge.bPageManager.PageManager
 * }} params
 * @constructor
 */
aa.lActiveAge.iController.Controller = function(params) {
    this.pageManager_ = params.pageManager;
    this.headerManager_ = params.headerManager;
};


goog.scope(function() {
    var Controller = aa.lActiveAge.iController.Controller,
        LoyaltyCardListPage = aa.lActiveAge.bLoyaltyCardListPage
            .LoyaltyCardListPage,
        LoyaltyFullCardPage = aa.lActiveAge.bLoyaltyFullCardPage
            .LoyaltyFullCardPage;
    /**
     * 'login' action
     */
    Controller.prototype.actionLogin = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('LoginPage');
    };

    /**
     * 'test' action
     */
    Controller.prototype.actionTest = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('TestPage');
    };

    /**
     * 'enter' action
     */
    Controller.prototype.actionEnter = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Вход');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('EnterPage');

    };

    /**
     * Manages loyalty card list pages
     * @param {Object=<string, string>} opt_data
     */
    Controller.prototype.actionLoyaltyCardList = function(opt_data) {
        var location = this.pageManager_.getLocation();
        goog.object.extend(opt_data, {mask: location.mask});
        var currentPage = this.pageManager_.getCurrentPage();
        if (currentPage instanceof LoyaltyFullCardPage) {
            currentPage.disposeFullCard();
        }
        if (currentPage instanceof LoyaltyCardListPage) {
            if (opt_data.id) {
                if (currentPage.fullCardId &&
                        currentPage.fullCardId !== opt_data.id) {
                    currentPage.disposeFullCard();
                    var header = this.headerManager_.setCurrentHeader('Header');
                    this.pageManager_.setCurrentPage('LoyaltyCardListPage', {
                        listType: opt_data.listType || 'sale',
                        header: header,
                        mask: opt_data.mask
                    });
                }
                else {
                    if (!opt_data.data) this.pageManager_
                        .setCurrentPage('LoyaltyFullCardPage', opt_data);
                    else currentPage.showFullCard(opt_data);
                }
            } else if (currentPage.mask !== opt_data.mask) {
                var header = this.headerManager_.setCurrentHeader('Header');
                this.pageManager_.setCurrentPage('LoyaltyCardListPage', {
                    listType: opt_data.listType || 'sale',
                    header: header,
                    mask: opt_data.mask
                });
            }
            else if (currentPage.fullCardId) {
                currentPage.disposeFullCard();
            }
        } else {
            if (opt_data.id) {
                var header = this.headerManager_.setCurrentHeader('Header');
                header.makeLinkActive(opt_data.mask);
                this.pageManager_.setCurrentPage('LoyaltyFullCardPage',
                    opt_data);
            } else {
                var header = this.headerManager_.setCurrentHeader('Header');
                this.pageManager_.setCurrentPage('LoyaltyCardListPage', {
                    listType: opt_data.listType || 'sale',
                    header: header,
                    mask: opt_data.mask
                });
            }
        }
    };
    /**
     * action for full card page
     */
    Controller.prototype.actionLoyaltyFullCard = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.hide();
        this.pageManager_.setCurrentPage('LoyaltyFullCardPage', params);
    };

    /**
     * Password recovery process step1 - user email input
     */
    Controller.prototype.actionPwdRecoveryEmail = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Восстановление пароля');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('PwdRecoveryEmailPage');
    };

    /**
     * Password recovery process optional step available to
     * users registered via social network
     * @param {Object} params
     */
    Controller.prototype.actionPwdRecoverySocial = function(params) {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Восстановление пароля');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('PwdRecoverySocialPage', params);
    };

    /**
     * 'social_register' action
     */
    Controller.prototype.actionSocialRegister = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.hide();
        this.pageManager_.setCurrentPage('SocialRegistrationPage');
    };

    /**
     * 'registration step1' action
     */
    Controller.prototype.actionRegistrationStep1 = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Регистрация');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('RegStep1Page');
    };

    /**
     * 'registration step2' action
     */
    Controller.prototype.actionRegistrationStep2 = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Клуб "Активный возраст"');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('RegStep2Page');
    };

    /**
     * 'registration step3' action
     */
    Controller.prototype.actionRegistrationStep3 = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Дополнительная информация');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('RegStep3Page');
    };

    /**
     * 'registration step4' action
     */
    Controller.prototype.actionRegistrationStep4 = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('');
        this.headerManager_.hide();
        this.pageManager_.setCurrentPage('RegStep4Page');
    };

    /**
     * 'password recovery last' action
     */
    Controller.prototype.actionPwdRecoveryLast = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('');
        this.headerManager_.hide();
        this.pageManager_.setCurrentPage('PwdRecoveryLastPage');
    };

    /**
     * 'password recovery update' action
     */
    Controller.prototype.actionPwdRecoveryUpdate = function() {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Восстановление пароля');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('PwdRecoveryUpdatePage');
    };

    /**
     * 'password recovery update' action
     *  @param {Object} params
     */
    Controller.prototype.actionPwdRecoverySend = function(params) {
        this.headerManager_.setCurrentHeader('Header');
        this.headerManager_.setTitle('Восстановление пароля');
        this.headerManager_.show();
        this.pageManager_.setCurrentPage('PwdRecoverySendPage', params);
    };

});  // goog.scope
