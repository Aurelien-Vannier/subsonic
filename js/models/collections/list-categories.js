define([
	'chaplin',
  'models/base/collection',
  'models/categorie',
  'lib/utils'
], function(Chaplin, Collection, Categorie, Utils) {
  'use strict';

  var ListArtists = Collection.extend({

    model: Categorie,

    url: function(){
      return Utils.makeSimpleUrlRequest( { user : Chaplin.mediator.user, action : 'getMusicFolders' })
    },

    parse : function( response ){
      return response['subsonic-response'].musicFolders.musicFolder;
    }

  });

  return ListArtists;
});
