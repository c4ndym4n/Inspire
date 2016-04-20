'use strict';

angular.module('projectInspireDevApp').controller('LoginCtrl', function ($scope, alert, auth) {
  $scope.submit = function() {


    // $http.post(url, user)
    auth.login($scope.email, $scope.password)
      .success(function(res) {
          alert("success", "Login Successful", "welcome back, " + res.user.email + "!");
      })
      .error(function(err) {
          // console.log("NeeNee ErrorOnSubmit");
          alert('warning', 'Something HORRIBLE went wrong', err.message);
      });
  }


  });
