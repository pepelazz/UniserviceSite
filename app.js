(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./util');

require('./loader');

require('./ng-app');

require('./projects');



},{"./loader":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/loader.coffee","./ng-app":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/ng-app.coffee","./projects":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/projects.coffee","./util":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/loader.coffee":[function(require,module,exports){
$(function() {
  $('#hideAll .loader').css({
    marginTop: window.innerHeight * 0.4
  });
  return $(window).load(function() {
    return $('#hideAll').css({
      display: 'none'
    });
  });
});



},{}],"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/ng-app.coffee":[function(require,module,exports){
var module;

module = angular.module('app', ['ui.router', 'projects']);

module.config([
  '$urlRouterProvider', '$stateProvider', '$locationProvider', '$sceProvider', (function($urlRouterProvider, $stateProvider, $locationProvider, $sceProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
      name: "contacts",
      url: "/contacts",
      views: {
        '': {
          templateUrl: function() {
            return "templates/contacts.html";
          },
          controller: function($scope, $rootScope) {
            return $rootScope.firstScreenIsShown = false;
          }
        }
      }
    });
    $stateProvider.state({
      name: "about",
      url: "/about",
      views: {
        '': {
          templateUrl: function() {
            return "templates/about.html";
          },
          controller: function($scope, $rootScope) {
            return $rootScope.firstScreenIsShown = false;
          }
        }
      }
    });
  })
]);

module.controller('main', [
  '$rootScope', '$scope', '$http', '$location', '$timeout', '$log', (function($rootScope, $scope, $http, $location, $timeout, $log) {
    $rootScope.firstScreenIsShown = true;
    $scope.firstScreen = {
      show: function() {
        return $rootScope.firstScreenIsShown = true;
      },
      hide: function() {
        return $rootScope.firstScreenIsShown = false;
      }
    };
  })
]);



},{}],"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/projects.coffee":[function(require,module,exports){
var module;

module = angular.module('projects', ['ui.router']);

module.config([
  '$urlRouterProvider', '$stateProvider', (function($urlRouterProvider, $stateProvider) {
    $stateProvider.state({
      name: "projects",
      url: "/projects",
      views: {
        '': {
          templateUrl: function() {
            return "templates/projects.html";
          },
          controller: function($scope, $rootScope) {
            return $rootScope.firstScreenIsShown = false;
          }
        }
      }
    });
  })
]);

module.directive('yandexMap', [
  '$http', '$rootScope', (function($http, $rootScope) {
    return {
      restrict: 'A',
      link: (function($scope, element, attrs) {
        var init;
        init = (function() {
          var myGeoObject, myMap;
          myMap = new ymaps.Map("map", {
            center: [54.955, 22.327222],
            zoom: 12,
            controls: ['smallMapDefaultSet']
          });
          myGeoObject = new ymaps.GeoObject({
            geometry: {
              type: "Polygon",
              coordinates: [[[54.955, 22.327222], [54.959722, 22.3475], [54.955278, 22.349444], [54.960556, 22.361389], [54.959722, 22.365278], [54.963611, 22.365278], [54.963333, 22.373056], [54.9625, 22.376667], [54.956111, 22.375556], [54.951944, 22.368333], [54.942778, 22.383333], [54.936667, 22.369722], [54.938056, 22.362778], [54.935556, 22.356111], [54.944722, 22.341111], [54.95, 22.349167], [54.950833, 22.346389], [54.954444, 22.3475], [54.950278, 22.331389]]],
              fillRule: "nonZero"
            },
            properties: {
              balloonContent: "Многоугольник"
            }
          }, {
            fillColor: '#7BC64D',
            strokeColor: '#000000',
            opacity: 0.5,
            strokeWidth: 2
          });
          myMap.geoObjects.add(myGeoObject);
        });
        ymaps.ready(init);
      })
    };
  })
]);

module.directive('photoFieldGallery', [
  '$http', '$rootScope', '$timeout', (function($http, $rootScope, $timeout) {
    return {
      restrict: 'A',
      link: (function($scope, element, attrs) {
        var fixSize, i, _i;
        $scope.photoArray = [];
        for (i = _i = 1; _i <= 7; i = ++_i) {
          $scope.photoArray.push('field0' + i);
        }
        $scope.selected = 'field01';
        $timeout(function() {
          return fixSize();
        }, 0);
        $(window).on('resize', (function() {
          fixSize();
        }));
        fixSize = (function() {
          var width;
          width = $('.photo-gallery .main-img').width();
          $('.photo-gallery .small-img').css({
            width: (width - 2) / $scope.photoArray.length
          });
        });
        $scope.selectPhoto = (function(index) {
          $scope.selected = $scope.photoArray[index];
        });
      })
    };
  })
]);



},{}],"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/util.coffee":[function(require,module,exports){
var fixSize;

$(function() {
  fixSize();
  return $(window).on('resize', (function() {
    fixSize();
  }));
});

fixSize = (function() {});



},{}]},{},["./src/javascript/app.coffee"]);
