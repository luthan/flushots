Meteor.publish("flushots", function(){
	return Flushots.find({
		$or:[
			{$and:[
				{"public": true},
				{"public": {$exists: true}}
			]},
			{$and:[
				{owner: this.userId},
				{owner: {$exists: true}}
			]}
		]});
});