define(['views/base/view',
  'text!templates/music/tiles/music-track-tile-item.hbs'
		], function(View, template){

	var MusicTrackItemView = View.extend({

		tagName: 'tr',

		autoRender: true,

		template: template

	});

	return MusicTrackItemView;

});