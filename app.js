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
