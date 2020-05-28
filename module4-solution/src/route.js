(function () {
'use strict';

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$locationProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$locationProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/temp/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/temp/categoriesList.html',
    controller: 'CategoriesListController as ctrl',
    resolve: {
      categories: ["MenuDataService", function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state("categories.items", {
        url:          "/items/{categoryShortName}",
        templateUrl:  "src/temp/itemsList.html",
        controller:   "ItemsListController as ctrl",
        params:       { categoryShortName: null },
        resolve: {
          items: [ "$stateParams", "MenuDataService", function($stateParams, MenuDataService) {
            return MenuDataService.getItemsforCategory($stateParams.categoryShortName);
          }]
        }
      });
      //to beautify the url
      $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
    }
   })();
