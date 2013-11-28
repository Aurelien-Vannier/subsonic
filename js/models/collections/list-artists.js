define([
	'chaplin',
  'models/base/collection',
  'models/artist',
  'lib/utils'
], function(Chaplin, Collection, Artist, Utils) {
  'use strict';

  var ListArtists = Collection.extend({

    model: Artist,

    total: 0,

    getTotalArtiste: function(){
    	var self = this;

    	var request = Utils.makeRequestOptions({
    		user : Chaplin.mediator.user,
    		action : 'getIndexes',
    		success : function( response ){
    			if( response['subsonic-response'].indexes ){
    				
    				self.total = 0;

    				_.each( response['subsonic-response'].indexes.index, function( lettre ){
    					self.total += lettre.artist.length;
    				});
    			}
            },
            
            error : function( response ){
                console.log('error...');
                console.log(response);
            }
    	});

    	return $.ajax( request );
    }

  });

  return ListArtists;
});
