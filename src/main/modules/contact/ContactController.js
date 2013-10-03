define(function () {
	"use strict";

	var ContactController = function($scope, contactService) {
		$scope.author = "Marco Rinck";
		$scope.email = "marco.rinck@googlemail.com";
		$scope.homepage = "https://github.com/marcorinck/ngStart";
		$scope.message = contactService.message;

		$scope.contacts = [
			{"id":1,"name":"user1","email":"user1@example.com"},
			{"id":2,"name":"user2","email":"user2@example.com"}];

		$scope.filteredContacts = [];

		$scope.$watch("searchText", function(filterText){
			filterContacts(filterText);
		});

		function filterContacts(filterText) {
			$scope.filteredContacts = $scope.contacts; //contactFilter($scope.contacts, filterText);
		}

		$scope.messageChanged = function() {
			$scope.sent = false;
		};

		$scope.sendMessage = function() {
			contactService.sendMessage();
			$scope.sent = true;
		};
	};

	ContactController.$inject = ["$scope", 'ContactService'];

	return ContactController;
});