angular.module('archer').directive('updateTitle', function() {
    return {
        scope: {
            viewPage: "="
        },
        restrict: 'EA',
        templateUrl: 'updateTitle.html',
        controller: 'controller'
    };
});
