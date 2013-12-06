define(['models/base/model'],
    function(
        Model){

    var ArtistInfo = Model.extend({

		url: function(){
			return 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=fd89e86b1bd2a2ade06243be0a28137a&format=json&lang=fr&artist=' + this.name;
		},

		initialize : function( options ){
			Model.prototype.initialize.apply(this,arguments);

			if( options ){
				this.name = options.name;
			}			
		},

		parse : function( response ){
	        var object = [];

	        object.name = response.artist.name;

	        _.each( response.artist.image, function( image ){
	        	if( image.size == 'large' ){
	        		object.image = image['#text'];
	        	}
	        });

	        object.summary = response.artist.bio.summary;

            return object;
        }
        
	});

    return ArtistInfo;
});