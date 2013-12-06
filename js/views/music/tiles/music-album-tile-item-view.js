define(['views/base/view',
  'text!templates/music/tiles/music-album-tile-item.hbs'
		], function(View, template){

	var MusicAlbumItemView = View.extend({

		tagName: 'tr',

		autoRender: true,

		template: template,

		initialize: function(){
			View.prototype.initialize.apply(this,arguments);

			this.delegate('click tr', function(){
				// selection de l'element dans l'ihm
				this.$el.parent().find('tr').removeClass('selected-item');
				this.$el.addClass('selected-item');
				
				this.publishEvent('music:albumSelected', this.model.get('id') );
			});
	    },

	});

	return MusicAlbumItemView;

});