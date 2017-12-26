(function () {
	'use strict';
	angular.module('modal', [])
		.directive('modal', directive);

	function directive () {
		return {
			restrict: 'E',
			controller: '@',
			name: 'controllerName',
			templateUrl: function (elem, attr) {
				return attr.modalTemplate;
			}
		}
	}	
})();