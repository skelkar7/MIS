'use strict';

/**
 * @ngdoc function
 * @name myMisAppApp.controller:EmployeedetailsCtrl
 * @description
 * # EmployeedetailsCtrl
 * Controller of the myMisAppApp
 */
angular.module('myMisAppApp')
  .controller('EmployeedetailsCtrl', function ($scope, LoginService) {
		$scope.$on('loginEvent', function() {
			$scope.currEmp = LoginService.getCurrEmployee();
		});

		$scope.leaveFrom = new Date();

		$scope.applyLeaves = function() {
			$scope.dateRequired = $scope.periodInvalid = $scope.leaveApplied = false;

			if($scope.leaveFrom === null || $scope.leaveTo === null)
			{
				$scope.dateRequired = true;
				return;
			}
			else if($scope.leaveFrom > $scope.leaveTo)
			{
				$scope.periodInvalid = true;
				return;
			}
			else
			{
				$scope.leaveApplied = true;
			}

			$scope.leaveDays = Math.ceil(($scope.leaveTo - $scope.leaveFrom)/(1000 * 60 * 60 * 24)) + 1;
			$scope.currEmp.leavesTaken += $scope.leaveDays;
		};
  });
