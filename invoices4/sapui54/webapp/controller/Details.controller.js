sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sap/ui/core/UIComponent'
], function (Controller,History,UIComponent) {
    'use strict';
    return Controller.extend("logaligroup.sapui54.controller.Details", {


        onInit: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this);

        },
        _onObjectMatch: function (oEvent) {
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                model: "northwind"
            });
        },

        onBackNav: function () {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouterApp", {}, true);
            }
        }
    });


});