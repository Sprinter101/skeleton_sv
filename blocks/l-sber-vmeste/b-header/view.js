// NOT FINISHED goog.provide('sv.lSberVmeste.bHeader.View');

goog.require('aa.iMedia.Media');
goog.require('aa.iUtils.Utils');
goog.require('cl.iControl.View');
goog.require('goog.dom');
goog.require('goog.events.EventType');



/**
 * sv.lSberVmeste.bHeader.View
 * @param {Object=} opt_params
 * @param {Function=} opt_template
 * @param {string=} opt_modifier
 * @constructor
 * @extends {cl.iControl.View}
 */
sv.lSberVmeste.bHeader.View = function(opt_params, opt_template, opt_modifier) {
    goog.base(this, opt_params, opt_template, opt_modifier);

    this.setCssClass(sv.lSberVmeste.bHeader.View.CssClass.ROOT);

    /**
     * Tracks currently active nav link
     * @type {number}
     * @private
     */
    this.activeNavLink_ = 1;

    /**
     * Maps all available header menu items to their respective links and icons
     * @private
     */
    this.navLinksMap_ = [
        {
            title: 'new'
        },
        {
            title: 'journal'
        },
        {
            title: 'sale'
        },
        {
            title: 'bonus'
        },
        {
            title: 'school'
        },
        {
            title: 'fav'
        }
    ];
};
goog.inherits(sv.lSberVmeste.bHeader.View, cl.iControl.View);

goog.scope(function() {
    var View = sv.lSberVmeste.bHeader.View,
        Media = aa.iMedia.Media,
        Utils = aa.iUtils.Utils;

    /**
     * Css class enum
     * @enum {string}
     */
    View.CssClass = {
        ROOT: 'b-header',
        NAV_LINK: 'b-header__nav-menu-item',
        NAV_LINK_ACTIVE: 'b-header__nav-menu-item_active',
        NAV_LINK_ICON: 'b-header__nav-menu-item-icon',
        NAV_LINK_ICON_ACTIVE: 'b-header__nav-menu-item-icon_active',
        NAV_LINK_TEXT: 'b-header__nav-menu-item-text',
        NAV_LINK_TEXT_ACTIVE: 'b-header__nav-menu-item-text_active'
    };

    /**
     * Event enum
     * @enum {string}
     */
    View.Event = {
        CLICK: goog.events.EventType.CLICK,
        TAB_CLICKED: 'tab-clicked'
    };

    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        goog.base(this, 'decorateInternal', element);

        this.dom.links = this.getElementsByClass(View.CssClass.NAV_LINK);

        this.dom.iconLinks = this.getElementsByClass(
            View.CssClass.NAV_LINK_ICON
        );

        this.dom.activeIconLinks = this.getElementsByClass(
            View.CssClass.NAV_LINK_ICON_ACTIVE
        );

        this.dom.textLinks = this.getElementsByClass(
            View.CssClass.NAV_LINK_TEXT
        );

        this.populateNavLinksMap_();
        this.makeLinkActive(this.activeNavLink_);
    };

    /**
     * @override
     */
    View.prototype.enterDocument = function() {
        goog.base(this, 'enterDocument');

        Array.prototype.forEach.call(this.dom.links, function(link, i) {
            this.getHandler().listen(
                link,
                View.Event.CLICK,
                this.onNavLinkClick.bind(this, i)
            );
        }.bind(this));
    };

    /**
     * Show header
     */
    View.prototype.show = function() {
        goog.dom.classlist.remove(this.getElement(), Utils.CssClass.HIDDEN);
    };

    /**
     * Hide header
     */
    View.prototype.hide = function() {
        goog.dom.classlist.add(this.getElement(), Utils.CssClass.HIDDEN);
    };

    /**
     * Navigation link title getter
     * @param {number} id
     * @return {string}
     */
    View.prototype.getNavLinkTitle = function(id) {
        return this.navLinksMap_[id].title;
    };

    /**
     * Navigation link click handler
     * Highlights active link and emits event with active link id
     * @param {number} id
     * @param {goog.events.Event} event
     * @protected
     */
    View.prototype.onNavLinkClick = function(id, event) {
        if (id != this.activeNavLink_) {
            this.makeLinkActive(id);

            this.dispatchEvent({
                type: View.Event.NAV_LINK_CLICKED,
                value: {
                    id: id
                }
            });
        }
    };

    /**
     * Links nav menu items to dom elements
     * @private
     */
    View.prototype.populateNavLinksMap_ = function() {
        Array.prototype.forEach.call(
            ['iconLinks', 'activeIconLinks', 'textLinks'],
            function(linkType) {
                linkTypeSingular = linkType.slice(0, linkType.length - 1);
                Array.prototype.forEach.call(this.dom[linkType],
                    function(link, index) {
                        this.navLinksMap_[index][linkTypeSingular] = link;
                }.bind(this));
        }.bind(this));
    };

    /**
     * Highlights currently active link
     * @param {number} id
     */
    View.prototype.makeLinkActive = function(id) {
        if (this.activeNavLink_ != undefined) {
            var current = this.activeNavLink_;


            Utils.hide(this.navLinksMap_[current].activeIconLink);
            Utils.show(this.navLinksMap_[current].iconLink);

            goog.dom.classlist.remove(
                this.dom.links[current],
                View.CssClass.NAV_LINK_ACTIVE
            );

            goog.dom.classlist.remove(
                this.navLinksMap_[current].textLink,
                View.CssClass.NAV_LINK_TEXT_ACTIVE
            );
        }

        this.activeNavLink_ = id;

        Utils.show(this.navLinksMap_[id].activeIconLink);
        Utils.hide(this.navLinksMap_[id].iconLink);

        goog.dom.classlist.add(
            this.dom.links[id],
            View.CssClass.NAV_LINK_ACTIVE
        );

        goog.dom.classlist.add(
            this.navLinksMap_[id].textLink,
            View.CssClass.NAV_LINK_TEXT_ACTIVE
        );
    };

});  // goog.scope
