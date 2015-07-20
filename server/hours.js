Meteor.publish("hours", function(){
	return Hours.find({}, {sort: {name: 1}});
});