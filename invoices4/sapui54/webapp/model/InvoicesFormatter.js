sap.ui.define([

],
    function () {
        return {
            invoiceStatus: function (sStatus) {

                switch (sStatus) {
                    case "A": return "AA";
                        break;
                    case "B": return "BB";
                        break;
                    case "C": return "CC";
                        break;
                        default: return "DD";
                }
            }
        }
    });