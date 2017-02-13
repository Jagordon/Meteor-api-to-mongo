import { Meteor } from 'meteor/meteor';

	Meteor.startup(() => {
	    if (Wallets.find().count() === 0) {
	    	HTTP.call( 'GET', 'http://sandbox.blinkpool.com/wallets/0/20', {}, function( error, response ) {
		      if ( error ) {
		        console.log( error );
		      } else {
		        _.each(response.data, function(document) {
		        	Wallets.insert(document);
					_.each(document, function(item){
						var URL = 'http://sandbox.blinkpool.com/settlement/' + item;
						console.log(URL);
	    				HTTP.call( 'GET', URL , {}, function( error, response ) {
							if ( error ) {
					        	console.log( error );
					      	} else {
						      	_.each(response.data, function(document) {
		        					Settlement.insert(document);
		        				});
					      	}
	        			});
		    		});
		  		});
			}
		});
	}
});

/*	Meteor.publish("wallets", function() {
	  return Wallets.find();
	});
*/
