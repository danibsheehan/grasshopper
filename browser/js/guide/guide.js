app.config(function ($stateProvider) {
    $stateProvider.state('guide', {
        url: '/guide',
        templateUrl: 'js/guide/guide.html'
    });
});

app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);