// this controller runs recursively every second
angularApp.controller('localClockController', function($scope, $timeout) {
  $scope.clock = {};
  var updateClock = function () {
    $scope.clock.now = Date();
    $timeout(function () {
      updateClock();
    }, 1000);
  };
  updateClock();
});


