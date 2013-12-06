define([
  'chaplin',
  'views/base/collection-view',
  'views/music/tiles/music-artist-tile-item-view'
], function(Chaplin, CollectionView, MusicArtistItemView) {
	'use strict';

	var MusicArtistTileCollectionView = CollectionView.extend({

		id: 'music-artists-tile-collection-view',

    animationDuration: 150,

    tagName: 'ul',

    className: 'no-puce',

    itemView: MusicArtistItemView

	});

	return MusicArtistTileCollectionView;
});
