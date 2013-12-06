define([
  'chaplin',
  'views/base/collection-view',
  'text!templates/music/tiles/music-album-tile-collection.hbs',
  'views/music/tiles/music-album-tile-item-view'
], function(Chaplin, CollectionView, template, MusicAlbumItemView) {
	'use strict';

	var MusicAlbumTileCollectionView = CollectionView.extend({

		id: 'music-album-tile-collection-view',
  
    listSelector: '#list-albums-table',

    animationDuration: 150,

    itemView: MusicAlbumItemView,

    template: template,

	});

	return MusicAlbumTileCollectionView;
});
