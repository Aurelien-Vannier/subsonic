define([
  'chaplin',
  'views/base/collection-view',
  'text!templates/music/tiles/music-track-tile-collection.hbs',
  'views/music/tiles/music-track-tile-item-view'
], function(Chaplin, CollectionView, template, MusicTrackItemView) {
	'use strict';

	var MusicTrackTileCollectionView = CollectionView.extend({

		id: 'music-track-tile-collection-view',
  
    listSelector: '#list-tracks-table',

    animationDuration: 150,

    itemView: MusicTrackItemView,

    template: template,

	});

	return MusicTrackTileCollectionView;
});
