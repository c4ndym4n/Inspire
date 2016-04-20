'use strict';


angular.module('projectInspireDevApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {

  $http.get('http://localhost:3000/jobs').success(function (jobs) {
    $scope.jobs = jobs;
  }).error(function (err) {
    alert('warning', "Unable to get jobs", err.message);
  });
});
  // .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
  //
  //   $http.get(API_URL + '/jobs').success(function(jobs) {
  //       $scope.goals = jobs;
  //   }).error(function(err) {
  //       alert('warning', 'Unable to get Data!', err.message);
  //   });
  //
  //   $scope.goals = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
