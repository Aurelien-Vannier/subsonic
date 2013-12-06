define([
	'chaplin',
  'models/base/collection',
  'models/letter-artists',
  'lib/utils'
], function(Chaplin, Collection, LetterArtists, Utils) {
  'use strict';

  var ListLettersArtists = Collection.extend({

    model: LetterArtists,

    initialize : function( options ){
      Collection.prototype.initialize.apply(this,arguments);

      _.bindAll( this );
    },

    url: function(){
      if( _.isUndefined( this.idCategorie ) || this.idCategorie == -1 ){
        return Utils.makeSimpleUrlRequest( { user : Chaplin.mediator.user, action : 'getIndexes' })
      } else {
        return Utils.makeSimpleUrlRequest( { user : Chaplin.mediator.user, action : 'getIndexes' }) + '&musicFolderId=' + this.idCategorie;
      }
      
    },

    parse : function( response ){
      return response['subsonic-response'].indexes.index;
    },

    getTotalArtists: function(){
      var total = 0;

      this.each( function( letter ){
        total += letter.get('listArtists').length;
      });

      return total;
    }

  });

  return ListLettersArtists;
});
