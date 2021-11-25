sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    function (ManagedObject, Fragment) {
        "use strict";
        return ManagedObject.extend("logaligroup.sapui54.controller.HelloDialog", {
            constructor: function (oView) {
                this._oView = oView; // Crea atributo
            },
            exit: function () {
                delete this._oView();
            },

            open: function () {
                const oView = this._oView;
                if (!oView.byId("helloDialog")) { //Si ya esta abierto no lo vuelve a cargar

                    let oFragmenController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();

                        }
                    }
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.sapui54.view.HelloDialog",
                        controller: oFragmenController//this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }
            }

        });
    });