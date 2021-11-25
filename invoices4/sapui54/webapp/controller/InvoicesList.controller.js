sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter'
],
    function (Controller, JSONModel, InvoicesFormatter) {

        return Controller.extend("logaligroup.sapui54.controller.InvoicesList", {
            formatter: InvoicesFormatter,
            onInit: function () {
                var oViewModel = new JSONModel({
                    usd: "USD",
                    eur: "EUR"
                });
                this.getView().setModel(oViewModel, "currency");
            },

            navigateToDetails: function (oEvent) {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                const oItem = oEvent.getSource();

                oRouter.navTo("Details", { invoicePath: window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1)) });
            }
        });
    });