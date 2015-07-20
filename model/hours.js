Hours = new Mongo.Collection("hours");

Meteor.methods({
	insertPerson: function(person,hour,slot){
		Hours.update( {"_id":hour._id, "slots.name": slot.name},
			{$push : {"slots.$.people" : person}});
		// var temp = Hours.findOne({"_id":hour._id});
		// temp.slots[0].people.push(person);
		// temp.update();
		// console.log(temp);
		return "hello";
	},
	removePerson: function(person){
		Hours.update({}, { slots: { $pull: { people:"Paul" } } }, { multi: true });
		// Hours.find({ slots : { $elemMatch : { people:"Paul" } } }) ;
		// x.forEach(function(data){
		// 	data.update({}, { $pull: { slots: { people:"Paul" } } }, { multi: true });
		// 	console.log(data);
		// });
	}
});