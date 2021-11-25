sap.ui.define([
    'sap/ui/core/mvc/Controller' 

],
    function (Controller ) {
        'use strict';

        return Controller.extend("logaligroup.sapui54.controller.App", {

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


      /*      onShowHello: function () {
                //  alert("hello onShowHello");
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            } */   
            onOpenDialogHeader:function(){
                this.getOwnerComponent().openHelloDialog();
            } 
        });

    });