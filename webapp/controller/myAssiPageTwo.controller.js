sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myassigmnent.myassigmnent.controller.myAssiPageTwo", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oRouter.getRoute("myAssiPageTwo").attachPatternMatched(this.onRouteMatched, this);
            },
            onRouteMatched: function(oEvent) {
                // var oModel = await sap.ui.getCore().getModel("employeeModel");
                // console.log(oModel)
                // var employeeInfo = oModel.getProperty("/EmployeeCollection");
                // console.log(employeeInfo)
                var args = oEvent.getParameter("arguments");
                var empInfo = JSON.parse(args.employeeInfo);
                // console.log(empInfo)
                var oView = this.getView(); 
                oView.setModel(new sap.ui.model.json.JSONModel(empInfo), "employeeModel");
            }

        });
    });