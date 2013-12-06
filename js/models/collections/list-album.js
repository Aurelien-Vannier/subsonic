define([
	'chaplin',
  'models/base/collection',
  'models/album',
  'lib/utils'
], function(Chaplin, Collection, Album, Utils) {
  'use strict';

  var ListAlbums = Collection.extend({

    model: Album,

    url: function(){
      return Utils.makeSimpleUrlRequest( { user : Chaplin.mediator.user, action : 'getMusicDirectory' } ) + '&id=' + this.idArtist;
    },

    parse : function( response ){
      return response['subsonic-response'].directory.child;
    }

  });

  return ListAlbums;
});
