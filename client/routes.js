// angular.module("flushotsApp").run(["$rootScope", "$state", function($rootScope, $state){
// 	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error){
// 		if(error === "AUTH_REQUIRED"){
// 			$state.go('flushots');
// 		}
// 	});
// }]);

angular.module("flushotsApp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		
		$stateProvider
			.state('flushots', {
				url: '/flushots',
				templateUrl: 'client/flushots/views/flushots-list.ng.html',
				controller: 'FlushotsListController'
			})
			.state('flushotDetails',{
				url: '/flushot/:flushotId',
				templateUrl: 'client/flushots/views/flushot-details.ng.html',
				controller: 'FlushotDetailsController',
				resolve: {
					"currentUser" : ["$meteor", function($meteor){
						return $meteor.requireUser();
					}]
				}
			});
			
			$urlRouterProvider.otherwise('/flushots');
	}]);