PlayersList = new Mongo.Collection('players');


if(Meteor.isClient) {
	
	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find()
		}
	});

		Template.leaderboard.events({
		'click': function(){
			console.log("You clicked something");
		}
	});
};


