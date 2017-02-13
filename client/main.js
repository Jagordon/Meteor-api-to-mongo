import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'

import './main.html';

/*Template.wallets.onCreated(function bodyOnCreated() {
  Meteor.subscribe('wallets');
	console.log(Wallets.find().fetch());
});
	Tracker.autorun(function() {
		console.log(Wallets.find().fetch());
	  });*/
Template.wallets.helpers({
  wallets(){
    return Wallets.find().fetch();
  }
});

