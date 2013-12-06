define([
  'chaplin',
  'views/base/collection-view',
  'text!templates/music/tiles/music-letter-tile-collection.hbs',
  'views/music/tiles/music-letter-tile-item-view'
], function(Chaplin, CollectionView, template, MusicArtistItemView) {
	'use strict';

	var MusicArtistTileCollectionView = CollectionView.extend({

		id: 'music-artists-tile-collection-view',

    listSelector: '#music-list-letters-artist',

    animationDuration: 150,

    itemView: MusicArtistItemView,

    template: template,

    listen: {
      'reset collection': 'updateTotal'
    },

    itemsReset: function(){
      CollectionView.prototype.itemsReset.apply(this,arguments);
      
      this.updateTotal();
    },

    updateTotal: function(){
      this.$el.find('.loader-32p').remove();
      this.$el.find('#artists-total').html( this.collection.getTotalArtists);
    }

	});

	return MusicArtistTileCollectionView;
});
