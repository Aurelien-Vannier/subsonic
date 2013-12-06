define([
	'chaplin',
  'models/base/collection',
  'models/track',
  'lib/utils'
], function(Chaplin, Collection, Track, Utils) {
  'use strict';

  var ListTracks = Collection.extend({

    model: Track,

    url: function(){
      return Utils.makeSimpleUrlRequest( { user : Chaplin.mediator.user, action : 'getMusicDirectory' } ) + '&id=' + this.idAlbum;
    },

    parse : function( response ){
      return response['subsonic-response'].directory.child;
    }

  });

  return ListTracks;
});
