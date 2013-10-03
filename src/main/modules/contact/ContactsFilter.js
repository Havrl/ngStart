define(function () {
	'use strict';

	var ContactsFilter = function () {
		return function (contacts, filterValue) {
			if (!filterValue) {
				return contacts;
			}

			var matches = [];
			filterValue = filterValue.toLowerCase();
			for (var i = 0; i < contacts.length; i++) {
				var contact = contacts[i];
				if (contact.name.toLowerCase().indexOf(filterValue) > -1 ||
					contact.email.toLowerCase().indexOf(filterValue) > -1) {

					matches.push(contact);
				}
			}
			return matches;
		};
	};

	return ContactsFilter;
});


