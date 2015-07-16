Flushots = new Mongo.Collection("flushots");

Flushots.allow({
	insert: function(userId, flushot){
		return userId && flushot.owner === userId;
	},
	update: function(userId, flushot, fields, modifier){
		return userId && flushot.owner === userId;
	},
	remove: function(userId, flushot){
		return userId && flushot.owner === userId;
	},
});