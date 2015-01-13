(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./ng-app');

require('./util');

require('./loader');



},{"./loader":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/loader.coffee","./ng-app":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/ng-app.coffee","./util":"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/loader.coffee":[function(require,module,exports){
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

module = angular.module('app', ['ui.router']);

module.config([
  '$urlRouterProvider', '$stateProvider', '$locationProvider', '$sceProvider', (function($urlRouterProvider, $stateProvider, $locationProvider, $sceProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
      name: "contacts",
      url: "/contacts",
      views: {
        '': {
          templateUrl: function() {
            return "templates/contacts.html";
          }
        }
      }
    });
    $stateProvider.state({
      name: "projects",
      url: "/projects",
      views: {
        '': {
          templateUrl: function() {
            return "templates/projects.html";
          }
        }
      }
    });
  })
]);

module.controller('main', [
  '$rootScope', '$scope', '$http', '$location', '$timeout', '$log', (function($rootScope, $scope, $http, $location, $timeout, $log) {
    $scope.screen = 'first';
  })
]);



},{}],"/Users/Trikster/static_sites/Uniservice/_Uniservice/src/javascript/util.coffee":[function(require,module,exports){
var calcWidthOrHeight, fixSize;

$(function() {
  fixSize();
  return $(window).on('resize', (function() {
    fixSize();
  }));
});

fixSize = (function() {
  var wh, ww;
  wh = window.innerHeight;
  ww = window.innerWidth;
  $('#first-screen').css({
    width: ww
  }).css({
    height: wh
  });
});

calcWidthOrHeight = (function() {
  var height, heightFunc, width, widthFunc;
  heightFunc = function() {
    return window.innerHeight;
  };
  widthFunc = function() {
    return window.innerWidth - height * 264 / 420;
  };
  height = heightFunc();
  width = widthFunc();
  if (height >= width) {
    $('.img-painter').css({
      width: width
    }).css({
      height: 'auto'
    }).css({
      marginTop: height - width
    });
  } else {
    $('.img-painter').css({
      height: height
    }).css({
      width: 'auto'
    });
  }
});



},{}]},{},["./src/javascript/app.coffee"]);
