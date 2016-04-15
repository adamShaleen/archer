angular.module('archer', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.HTML',
        })

        .state('about', {
            url: '/about',
            templateUrl: 'about.HTML',
        })

        .state('favorites', {
            url: '/fav',
            templateUrl: 'fav.html',
        });

        $urlRouterProvider
        .otherwise('/');

});
