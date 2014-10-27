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
        visible : true, // by default the clock area is visible
        clockToDisplay : 'local', // by default we display the local clock
        displayLocalClock : function () {
          self.clockToDisplay = 'local';
        },
        displayServerClock : function () {
          self.clockToDisplay = 'server';
        }
      };
      return self;
    }.call();


    // this is for operations to allow for other UI elements to show up here
    return { clock : _clock };
  }.call();
});

