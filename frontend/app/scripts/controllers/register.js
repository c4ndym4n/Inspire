'use strict';

angular.module('projectInspireDevApp').controller('RegisterCtrl', function($scope, alert, auth) {
    $scope.submit = function() {

      // var url = API_URL + 'register';
      // var user = {
      //   email: $scope.email,
      //   password: $scope.password
      // };

      auth.register($scope.email, $scope.password)
        .success(function(res) {
            alert("success", "Account Created", "welcome, " + res.user.email + "!");
        })
        .error(function(err) {
            // console.log("NeeNee ErrorOnSubmit");
            // alert('warning', 'oeps', 'Could Not Register');
            alert('warning', 'Something went wrong', err.message);

        });
    };
  });
