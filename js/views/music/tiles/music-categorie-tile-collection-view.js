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

	});

	return MusicCategorieTileCollectionView;
});
