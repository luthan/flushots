angular.module('flushotsApp',['angular-meteor', 'ui.router', 'hourDisplayFilter']);

function onReady(){
	angular.bootstrap(document, ['flushotsApp']);
}

if (Meteor.isCordova)
	angular.element(document).on("deviceready", onReady);
else
	angular.element(document).ready(onReady);
	
angular.module('hourDisplayFilter', []).filter('hoursDisplay',
	function(){
		return function(input){
			if(input > 12){
				return (input-12) + ' pm';
			} else{
				return input + ' am';
			}
		};
	});