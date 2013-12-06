define([
	'chaplin',
	'models/base/model',
  	'lib/utils'],
    function(
        Chaplin, Model, Utils){

    var Track = Model.extend({

		parse : function( response ){
            var minutes = Math.floor(response.duration / 60);
            var seconds = response.duration - minutes * 60;
            if( seconds < 10 ){
                seconds = '0' + seconds.toString();
            }

            response.title = $('<textarea/>').html(response.title).val();

            response.formatDuration = minutes + ':' + seconds;

            return response;
        }
        
	});

    return Track;
});