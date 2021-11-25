sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
],
    function (Controller, MessageToast) {
        'use strict';

        return Controller.extend("logaligroup.sapui54.controller.HelloPanel", {

            onInit: function () {
                /*   const oData = {
                       recipient: {
                           name: 'World onInit'
                       }
                   };*/
                //const oModel = new JSONModel(oData);
                //this.getView().setModel(oModel,"name");
                // this.getView().setModel(Models.createRecipient());
                //i18n
                // const i18nModel = new ResourceModel({bundleName : "logaligroup.sapui54.i18n.i18n"});
                //this.getView().setModel(i18nModel,"i18n");
            },


            onShowHello: function () {
                //  alert("hello onShowHello");
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                //const oView = this.getView();+
                this.getOwnerComponent().openHelloDialog();
                /*if (!oView.byId("helloDialog")) { //Si ya esta abierto no lo vuelve a cargar
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.sapui54.view.HelloDialog",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }*/

            }//,

           /* onCloseDialog: function () {
                this.getView().byId("helloDialog").close();

            }*/
        });

    });

    