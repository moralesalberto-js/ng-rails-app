// this controller is for the server clock that will retrieve the clock from
// server every second
angularApp.controller('serverClockController', function($scope, $timeout, $http) {
  $scope.clock = { now: '' };

  // this function goes to the server to retrieve the time
  // and it comes back in the data object
  // data['current_time']
  var retrieveTimeFromServer = function () {
    $http.get('/server/time').success(function (data, status) {
      $scope.clock.now = data['current_time'];
    });
  };

  // this is the function that will work recursively
  var updateClock = function () {
    retrieveTimeFromServer();
    $timeout(function () {
      updateClock();
    }, 2000);
  };

  // start the recursive action
  updateClock();
});
