/*global QUnit*/

sap.ui.define([
	"myassigmnent/myassigmnent/controller/myassignment.controller"
], function (Controller) {
	"use strict";

	QUnit.module("myassignment Controller");

	QUnit.test("I should test the myassignment controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
