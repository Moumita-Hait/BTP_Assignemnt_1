sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myassigmnent.myassigmnent.controller.myassignment", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            },
            onItemPress: function(oEvent){
                var param = oEvent.getSource()
                // var empGrade = param.getBindingContext().getProperty("EmployeeGrade");
                // console.log(empGrade);
                // if(empGrade == "A" || empGrade == "C" || empGrade == "SC" ){
                //         this.oRouter.navTo("myAssiPageTwo", {empGrade: empGrade});
                // }
                // else{
                //         this.oRouter.navTo("myAssiPageThree", {empGrade: empGrade});
                // }

                var onSelectedItem = param.getBindingContext().getObject(); 
                var grade = onSelectedItem.EmployeeGrade; 

                // var employeeId = onSelectedItem.EmployeeId;
                // console.log(onSelectedItem);
                // console.log(employeeId);

                if(grade == "A" || grade == "C" || grade == "SC"){
                    this.oRouter.navTo("myAssiPageTwo", {employeeInfo: JSON.stringify(onSelectedItem)});
                }
            
                else{
                    this.oRouter.navTo("myAssiPageThree", {employeeInfo: JSON.stringify(onSelectedItem)});
                }
                

                



        
            }
        });
    });
