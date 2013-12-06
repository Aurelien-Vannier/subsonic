define(['views/base/view',
		], function(View){

	var MusicArtistItemView = View.extend({

		tagName: 'li',

		className: 'artist-item',

		autoRender: true,

		initialize: function(){
			View.prototype.initialize.apply(this,arguments);

			this.delegate('click .artist-item', function(){
				// selection de l'element dans l'ihm
				this.$el.parent().find('li').removeClass('selected-item');
				this.$el.addClass('selected-item');
				
				this.publishEvent('artistSelected', this.model);
			});
	    },

		getTemplateFunction: function() {
			return Handlebars.compile( '{{ name }}' );
		}

	});

	return MusicArtistItemView;

});