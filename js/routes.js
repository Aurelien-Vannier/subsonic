define(function() {
	'use strict';

	// The routes for the application. This module returns a function.
	// `match` is match method of the Router
	return function(match) {
		match('', 'accueil/accueil#show');
		match('accueil', 'accueil/accueil#show');
		match('settings', 'settings/settings#show');
		match('music', 'music/music#show');
	};
});
