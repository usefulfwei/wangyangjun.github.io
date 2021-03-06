'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'wangyangjun.github.io'; //
	var applicationModuleVendorDependencies = ['ngResource', 'ngAnimate',  'ui.bootstrap', 'ui.router',
		'ui.bootstrap.modal', 'hc.marked', 'duScroll', 'angularUtils.directives.dirDisqus'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();