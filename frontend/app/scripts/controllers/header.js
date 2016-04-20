'use strict';

angular.module('projectInspireDevApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
    
  });
