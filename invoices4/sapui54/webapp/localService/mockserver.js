sap.ui.define([
    'sap/ui/core/util/MockServer',
    'sap/ui/model/json/JSONModel',
    'sap/base/util/UriParameters',
    'sap/base/Log'
], function (MockServer, JSONModel, UriParameters, Log) {
    'use strict';

    let oMockServer;
    let _sAppPath = "logaligroup/sapui54/";
    let _sJsonFilesPath = _sAppPath + "localService/mockdata";

    let oMockServerInterface = {
        init: function (oOptionParameters) {
            let oOptions = oOptionParameters || {};
            return new Promise(function (fnResolve, fnReject) {
                let sManifestUrl = sap.ui.require.toUrl(_sAppPath + "manifest.json");
                let oManifestModel = new JSONModel(sManifestUrl);

                oManifestModel.attachRequestCompleted(function () {
                    let oUriParameters = new UriParameters(window.location.href);
                    let oJsonFilesUrl = sap.ui.require.toUrl(_sJsonFilesPath);
                    let oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/mainService");
                    let sMetadataUrl = sap.ui.require.toUrl(_sAppPath + oMainDataSource.settings.localUri);
                    let sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();

                    if (!oMockServer) {
                        oMockServer = new MockServer({
                            rootUri: sMockServerUrl
                        });
                    } else {
                        oMockServer.stop();
                    }

                    MockServer.config({
                        autoRespond: true,
                        autoRespondAfter: (oOptions.Delay || oUriParameters.get("serverDelay") || 500)
                    });

                    oMockServer.simulate(sMetadataUrl,{
                        sMockdataBaseUrl: oJsonFilesUrl,
                        bGenerateMissingMockData: true
                    });

                    let aRequest = oMockServer.getRequests();
                    oMockServer.start();

                    Log.info("Running mock");

                    fnResolve();

                });
                oManifestModel.attachRequestFailed(function () {

                });
            });
        }
    };
    return oMockServerInterface;
});