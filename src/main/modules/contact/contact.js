define(['angular', 'contact/ContactController', 'contact/ContactService', 'contact/ContactsFilter' ], function (angular, ContactController, ContactService, ContactsFilter) {
	"use strict";

	var contact = angular.module("contact", ["ngRoute"]);

	contact.service("ContactService", ContactService);

	contact.config(["$routeProvider", "$filterProvider", function($routeProvider, $filterProvider) {
		$filterProvider.register('ContactsFilter', ContactsFilter);
		$routeProvider.when('/contact/', {
			templateUrl: "modules/" + 'contact/contact.html',
			controller: ContactController
		});
	}]);

	return contact;
});