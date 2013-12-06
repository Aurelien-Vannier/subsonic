define([
  'chaplin',
  'views/base/collection-view',
  'text!templates/music/tiles/music-categorie-tile-collection.hbs',
  'views/music/tiles/music-categorie-tile-item-view'
], function(Chaplin, CollectionView, template, MusicCategorieItemView) {
	'use strict';

	var MusicCategorieTileCollectionView = CollectionView.extend({

		id: 'music-categorie-tile-collection-view',

    listSelector: '#music-list-categorie',

    animationDuration: 150,

    itemView: MusicCategorieItemView,

    template: template,

    listen: {
      'reset collection': 'updateTotal'
    },

    initialize: function(){
      CollectionView.prototype.initialize.apply(this,arguments);

      var self = this;

      this.delegate('change','#music-list-categorie', function( event ){
        self.publishEvent('music:categorieSelected', $( event.currentTarget ).val());
      });
    },

    itemsReset: function(){
      CollectionView.prototype.itemsReset.apply(this,arguments);

      this.updateTotal();
    },

    updateTotal: function(){
      this.$el.find('#categories-total').html( this.collection.length);
    }
    
	});

	return MusicCategorieTileCollectionView;
});
