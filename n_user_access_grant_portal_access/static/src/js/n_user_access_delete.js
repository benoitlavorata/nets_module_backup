/* Copyright 2016 Onestein
   Copyright 2018 Tecnativa - David Vidal
   License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl). */
odoo.define("n_user_access_grant_portal_access", function(require) {
"use strict";

    var core = require("web.core");
    var Sidebar = require("web.Sidebar");
    var session = require("web.session");
    var _t = core._t;

    Sidebar.include({
        _addItems: function (sectionCode, items) {
            var _items = items;
            if (!session.is_superuser && sectionCode === 'other' && items.length && !session.group_grant_portal_access_data) {
                _items = _.reject(_items, {label:_t("Grant Portal Access")});
            }
            this._super(sectionCode, _items);
        },
    });
});
