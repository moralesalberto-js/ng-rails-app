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

    // implement a function that goes to the server to retrieve the
    // time
    var _getTimeFromServer = function () {
      alert('here I go to the server to get the time');
    };

    // this is for operations to allow for other UI elements to show up here
    return { clock : _clock, getTimeFromServer : _getTimeFromServer };
  }.call();
});

