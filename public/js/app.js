angular.module('archer', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Archer: Home', {
            url: '/',
            templateUrl: 'home.html',
        })

        .state('Archer: About', {
            url: '/about',
            templateUrl: 'about.html',
        })

        .state('Archer: Favorites', {
            url: '/fav',
            templateUrl: 'fav.html',
        });

        $urlRouterProvider
        .otherwise('/');

});
