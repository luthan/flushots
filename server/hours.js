Meteor.publish("hours", function(){
	return Hours.find({});
});