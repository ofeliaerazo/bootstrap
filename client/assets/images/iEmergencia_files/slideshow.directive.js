'use strict';

(function () {
	'use strict';

	angular.module('startUpApp').directive('slideshow', slideshow);

	function slideshow() {
		return {
			restrict: 'EA',
			templateUrl: 'components/slideshow/slideshow.html'
		};
	}
})();
//# sourceMappingURL=slideshow.directive.js.map
