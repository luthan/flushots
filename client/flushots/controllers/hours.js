/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('flushotsApp').controller('HoursController', ['$scope', '$meteor', 'hourDisplayFilter', function($scope, $meteor, hourDisplayFilter){
	$scope.hours = $meteor.collection(Hours).subscribe("hours");
	$scope.remove = function(hour){
		$scope.hours.remove(hour);
	}
	$scope.removeAll = function(){
		$scope.hours.remove();
	}
	$scope.addHour = function(newHour){
		newHour.slots = [{name:'00', people: []}, {name:'15', people: []},{name:'30', people: []},{name:'45', people: []}];
		$scope.hours.push(newHour);
		console.log(newHour);
	}
}]);