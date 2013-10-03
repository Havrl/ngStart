define(function () {
	"use strict";

	var ContactController = function($scope, $filter, contactService) {
		$scope.author = "Marco Rinck";
		$scope.email = "marco.rinck@googlemail.com";
		$scope.homepage = "https://github.com/marcorinck/ngStart";
		$scope.message = contactService.message;

		$scope.contacts = [
			{"id":1,"name":"user1","email":"user1@example.com"},
			{"id":2,"name":"user2","email":"user2@example.com"}];

		$scope.filteredContacts = [];

		//Watch searchText value and pass it and the contacts to ContactsFilter
		//Doing this instead of adding the filter to ng-repeat allows it to only be run once (rather than twice)
		$scope.$watch("searchText", function(filterText){
			filterContacts(filterText);
		});

		function filterContacts(filterText) {
			$scope.filteredContacts = $filter('ContactsFilter')($scope.contacts, filterText);
		}

		$scope.messageChanged = function() {
			$scope.sent = false;
		};

		$scope.sendMessage = function() {
			contactService.sendMessage();
			$scope.sent = true;
		};
	};

	return ["$scope", '$filter', 'ContactService', ContactController];
});
