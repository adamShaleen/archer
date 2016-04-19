angular.module('archer', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Archer: Home', {
            url: '/',
            templateUrl: 'home.HTML',
        })

        .state('Archer: About', {
            url: '/about',
            templateUrl: 'about.HTML',
        })

        .state('Archer: Favorites', {
            url: '/fav',
            templateUrl: 'fav.html',
        });

        $urlRouterProvider
        .otherwise('/');

});
