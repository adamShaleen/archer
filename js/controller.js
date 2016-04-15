angular.module('archer').controller('controller', function($scope, service, $state) {

$scope.state = $state;

$scope.displayAboutText = service.getAboutText();

$scope.displayMapText = service.getMapText();

});
