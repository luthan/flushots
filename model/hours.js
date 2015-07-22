Hours = new Mongo.Collection("hours");
Slot = Hours;
// Slot = new Mongo.Collection("hours");

Meteor.methods({
	insertPerson: function(person, hour, slot){
		Hours.update({slots:{$elemMatch:{"people":person}}},{$pull:{"slots.$.people":person}}, function(){
			Hours.update({"name":hour,"slots.name":slot},{$push:{"slots.$.people":person}});
		});
		return person;
	}
});