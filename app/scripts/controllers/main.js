(function(){


  'use strict';

  /**
   * @ngdoc function
   * @name flickrApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the flickrApp
   */

  var app = angular.module('flickrApp');
  app.controller('MainCtrl', ['$scope', '$http', '$rootScope', 'Gallaryservice',
  function ($scope, $http, $rootScope, Gallaryservice) {

    // Define my scope with the information from API flickr
    $scope.photos = Gallaryservice.load({ tags: 'london' });

    // Set class favourite and save in my scope
    $scope.item = {favorite: false};

  }]);

})(window, angular);
