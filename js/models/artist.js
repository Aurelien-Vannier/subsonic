define(['models/base/model'],
    function(
        Model){

    var Artist = Model.extend({

		parse : function( response ){
            response.name = $('<textarea/>').html(response.name).val();

            return response;
        }
        
	});

    return Artist;
});