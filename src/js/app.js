var module = angular.module("Site", ["ngRoute", "ui.bootstrap", "ui.bootstrap.tpls", "ui.router"]);
module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html"
        })
        .state('projects', {
            url: "/projects",
            templateUrl: "views/projects.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/contact.html"
        });
    $urlRouterProvider.otherwise("/about");
}]);
module.directive('table', function () {
    return {
        restrict: "E",
        link: function ($scope, $element) {
            $element.addClass('table');
        }
    }
});
module.directive('code', function () {
    return {
        restrict: "E",
        link: function ($scope, $element) {
            if ($element[0].parentNode.nodeName.toLowerCase() == 'pre') {
                angular.element($element[0].parentNode).addClass('hljs');
            } else {
                $element.addClass('inline');
            }
        }
    }
});