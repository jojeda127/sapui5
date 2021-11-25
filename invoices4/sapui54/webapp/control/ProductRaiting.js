sap.ui.define([
    'sap/ui/core/Control',
    'sap/m/RaitingIndicator',
    'sap/m/Label',
    'sap/m/Button'
], function (Control, RaitingIndicator, Label, Button, ) {
    'use strict';

    return Control.extend("logaligroup.sapui54.control.ProductRaiting", {
        metadata: {
            properties: {
                value: { type: "float", defaultValue: 0 }
            },
            agregations:{
                _rating:{
                    type:"sap.m.RaitingIndicator",
                    multiple:false,
                    visibility:hidden
                },
                _label:{
                    type:"sap.m.RaitingLabel",
                    multiple:false,
                    visibility:hidden
                },
                _button:{
                    type:"sap.m.Button",
                    multiple:false,
                    visibility:hidden
                },
                events:{
                    change:{
                        parameters:{
                            value:{type:"Int"}

                        }
                    }
                }

            }
        },
        init: function () { },
        renderer: function (oRm, oControl) { }
    })

});