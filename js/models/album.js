define([
	'chaplin',
	'models/base/model',
  	'lib/utils'],
    function(
        Chaplin, Model, Utils){

    var Album = Model.extend({

		parse : function( response ){
            response.title = $('<textarea/>').html(response.title).val();

            response.image = Utils.makeSimpleUrlRequest( { user : Chaplin.mediator.user, action : 'getCoverArt' } ) + "&size=100&id=" + response.coverArt;

            return response;
        }
        
	});

    return Album;
});