var count = 0;

angular.module('archer').controller('controller', function($scope, service, $state) {

$scope.state = $state;

$scope.displayAboutText = service.getAboutText();

$scope.displayMapText = service.getMapText();

// Map loading text---------------------------------
$scope.loading = service.loading;

// image Carousel-----------------------------------
$scope.pics = service.current;

if(count === 0){
    count++;
setInterval(function() {
    service.picShow();
    $scope.pics = service.current;
    $scope.$apply();
}, 2000);
}
//--------------------------------------------------
});
