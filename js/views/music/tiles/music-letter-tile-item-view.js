define(['views/base/view',
		'views/music/tiles/music-artist-tile-collection-view'
		], function(View, MusicArtistTileCollectionView){

	var MusicArtistItemView = View.extend({

		tagName: 'div',

		autoRender: true,

		getTemplateFunction: function() {
			return Handlebars.compile( '<h3 class="title-letter">{{ name }}</h3>' );
		},

		render: function(){
			View.prototype.render.apply(this,arguments);

			this.artistsListView = new MusicArtistTileCollectionView( { collection : this.model.get('listArtists') } );

			this.$el.append( this.artistsListView.$el );
		}

	});

	return MusicArtistItemView;

});