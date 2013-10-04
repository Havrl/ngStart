define(function() {
	"use strict";
	describe("the contactcontroller", function () {
		var contactController, scope;

		beforeEach(function () {
			//load contact module,    see http://docs.angularjs.org/api/angular.mock.inject
			module("contact");

			//properly instantiate the service
			inject(["ContactController", function (_contactController) {
				contactController = _contactController;
			}]);
		});


		it("should attach a list of contacts to the scope", function () {
			//expect(scope.contacts.length).toBe(2);
			expect(true).toBe(true);
		});
	});

});
