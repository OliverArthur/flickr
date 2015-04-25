(function(){
  'use strict';


/**
 * @ngdoc overview
 * @name flickrApp
 * @description
 * # flickrApp
 *
 * Main module of the application.
 */
  var app = angular.module('flickrApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize'
  ]);


  // This function is only used when the service is not "Local"
  // and when the API returns me a json format is not JSONP
  // To prevent conflict with Cross-Origin Resource
  app.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });





})(window, angular);
