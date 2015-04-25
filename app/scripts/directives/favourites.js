(function(){
  'use strict';

/**
 * @ngdoc directive
 * @name flickrApp.directive:flFavourites
 * @description
 * # flFavourites
 */
  var app = angular.module('flickrApp');
  app.directive('flFavourites', function () {
    return {
      scope: true,
      restrict: 'E',
      template: '<button class="btn btn-icon right"><span class="glyphicon glyphicon-heart" data-ng-class="{active: item.favorite}"></span></button>',
      link: function(scope, elem) {
        elem.bind('click', function() {

          // Add to favourites and save state in my scope
          scope.$apply(function(){
            scope.item.favorite = !scope.item.favorite;
          });

        });
      }
    };
  });
})(window, angular);
