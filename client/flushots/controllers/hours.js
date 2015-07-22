/// <reference path="../../../typings/tsd.d.ts"/>
angular.module('flushotsApp').controller('HoursController', ['$scope', '$meteor', 'hourDisplayFilter', function($scope, $meteor, hourDisplayFilter){
	var initializing = true;
	//$scope.takenSlot = Meteor.subscribe("takenSlot","Paul");
	$meteor.subscribe("hours").then(function(handle){
		$scope.hours = $meteor.collection(Hours);
		
		// $scope.takenSlot = $scope.hours.find({slots:{$elemMatch:{"people":"Paul"}}});
		// $scope.slot = Hours.findOne({slots:{$elemMatch:{"people":$scope.person}}});
		$scope.slot = "hahaha";
	});
	

	// $meteor.subscribe("takenSlot","Paul").then(function(handle){
	// 	handle.ready(function(){
	// 		// console.log(handle);
	// 	});
	// });
	
	$scope.remove = function(hour){
		$scope.hours.remove(hour);
	}
	$scope.person = "Paul";
	$scope.removeAll = function(){
		$scope.hours.remove();
	}
	$scope.addHour = function(newHour){
		newHour.slots = [{name:'00', people: []}, {name:'15', people: []},{name:'30', people: []},{name:'45', people: []}];
		$scope.hours.push(newHour);
		// console.log(newHour);
	}
	// $scope.$watch('person',function(){
	// 	if(initializing){
	// 		initializing = false;
	// 	} else{
	// 		console.log("changed");
	// 	}
	// });
	
	$scope.loadPerson = function(person){
		
	}
	
	$scope.assignSlot = function(person, hour, slot){
		Meteor.call("insertPerson", person, hour, slot, function(error, data){
			if(error){
				console.log(error);
			} 
			else{
				console.log(data);
				// $scope.slot = Hours.findOne({slots:{$elemMatch:{"people":data}}});
				$scope.slot = "hahahah";
			}
		});
	}
}]);