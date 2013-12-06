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
      response['subsonic-response'].musicFolders.musicFolder.unshift( {id: -1, name: Utils.locale.getTranslation('toutes categories') });
      
      return response['subsonic-response'].musicFolders.musicFolder;
    }

  });

  return ListArtists;
});
