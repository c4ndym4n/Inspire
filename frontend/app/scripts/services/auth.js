'use strict';

angular.module('projectInspireDevApp').service('auth', function ($http, authToken, API_URL, $state) {
  // var url = API_URL + 'login';
  // var user = {
  //   email: $scope.email,
  //   password: $scope.password
  // };

  function authSuccessful(res) {
    authToken.setToken(res.token);
    $state.go('jobs');
  }


  this.login = function(email, password) {
    return $http.post(API_URL + 'login', {
      'email':email,
      'password': password
    }).success(authSuccessful);
  }

  this.register = function(email, password) {
    return $http.post(API_URL + 'register', {
      'email': email,
      'password': password
    }).success(authSuccessful);
  }

  });
