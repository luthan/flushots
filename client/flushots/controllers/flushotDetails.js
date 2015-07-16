angular.module("flushotsApp").controller('FlushotDetailsController', function($scope, $meteor, $stateParams){
	$scope.flushotId = $stateParams.flushotId;
	$scope.flushot = $meteor.object(Flushots, $stateParams.flushotId).subscribe('flushots');
	$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
	
	$scope.save = function(){
		$scope.flushot.save().then(function(numberofDocs){
			console.log('save success doc affected ', numberofDocs);
		}, function(error){
			console.log('save error', error);
		});
	};
	
	$scope.reset = function(){
		$scope.flushot.reset();
	};
});