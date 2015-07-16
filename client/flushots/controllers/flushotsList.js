angular.module("flushotsApp").controller('FlushotsListController', ['$scope','$meteor', function($scope, $meteor){ 
	$scope.flushots = $meteor.collection(Flushots).subscribe('flushots');
	$scope.remove = function(flushot){
		$scope.flushots.remove(flushot);
	}
	$scope.removeAll = function(){
		$scope.flushots.remove();
	}
}]);