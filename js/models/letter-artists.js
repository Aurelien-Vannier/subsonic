define(['models/base/model',
  'models/collections/list-artists'],
    function(
        Model, ListArtists){

    var LetterArtists = Model.extend({

		parse : function( response ){
			this.set('listArtists', new ListArtists( response.artist, {parse: true} ));
			
			delete response['artist'];

			return response;
	    }

	});

    return LetterArtists;
});