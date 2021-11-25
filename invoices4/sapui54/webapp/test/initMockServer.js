sap.ui.define([
    '../localService/mockserver',
    'sap/m/MessageBox'
], function (mockserver, MessageBox) {
    'use strict';
    let aMockServers = [];
    aMockServers.push(mockserver.init());

    Promise.all(aMockServers).catch(function (oError) {
        MessageBox.Error(oError.message);
    }).finally(function () {
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    });
});