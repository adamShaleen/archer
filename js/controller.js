var count = 0;

angular.module('archer').controller('controller', function($scope, service, $state) {

//-------TItle Update--------------------------------------

$scope.state = $state;

//-------Text box's----------------------------------------

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
}, 2500);
}

//------image modal-------------------------------

$scope.toggleImg = false;

//-------------------------------------------------

});  // closing conroller tag
