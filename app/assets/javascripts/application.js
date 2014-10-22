// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require_tree ./controllers
//


// my angular app with no dependencies

var angularApp = angular.module('myApp', []);

// this controller runs recursively every second
angularApp.controller('clockController', function($scope, $timeout) {
  var updateClock = function () {
    $scope.clock = new Date();
    $timeout(function () {
      updateClock();
    }, 1000);
  };
  updateClock();
});

// this controller will take care of all the operations in the
// navigation bar
angularApp.controller('operationsController', function($scope) {

  $scope.operations = function () {

    // clock object to set the clock visible or not
    var _clock = function () {
      var self = {
        toggleVisible : function() {
          self.visible = !self.visible;
        },
        visible : false
      };
      return self;
    }.call();

    // this is for operations to allow for other UI elements to show up here
    return { clock : _clock};
  }.call();
});
