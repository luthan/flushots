/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('flushotsApp').controller('HoursController', ['$scope', '$meteor', 'hourDisplayFilter', function($scope, $meteor, hourDisplayFilter){
	var initializing = true;
	$scope.hours = $meteor.collection(Hours).subscribe("hours");
	
	// console.log($scope.hours);
	$scope.testhours = $meteor.collection(Hours);
	
	$scope.remove = function(hour){
		$scope.hours.remove(hour);
	}
	// $scope.person = "";
	$scope.removeAll = function(){
		$scope.hours.remove();
	}
	$scope.addHour = function(newHour){
		newHour.slots = [{name:'00', people: []}, {name:'15', people: []},{name:'30', people: []},{name:'45', people: []}];
		$scope.hours.push(newHour);
		// console.log(newHour);
	}
	$scope.$watch('person',function(){
		if(initializing){
			initializing = false;
		} else{
			// console.log("changed");
		}
	});
	
	$scope.loadPerson = function(person){
		
	}
	
	$scope.assignSlot = function(person, hour, slot){

		Meteor.call("removePerson", person, function(error, data){
			
		});
		// Meteor.call("insertPerson", person, hour, slot, function(error, data){
		// 	console.log(error);
		// 	console.log(data);
		// });
	}
}]);