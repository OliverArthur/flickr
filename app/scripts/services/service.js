(function(){


  'use strict';


/**
 * @ngdoc service
 * @name flickrApp.service
 * @description
 * # service
 * Service in the flickrApp.
 */
  var app = angular.module('flickrApp');

  // Call API Flickr
  app.factory('Gallaryservice', function ($resource) {
    var tags = 'london';
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tag=' + tags,
       { format: 'json', jsoncallback: 'JSON_CALLBACK' },
       { 'load': { 'method': 'JSONP' }
     });
  });

})(window, angular);
