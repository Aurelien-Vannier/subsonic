define(['views/base/view',
		], function(View){

	var MusicCategorieItemView = View.extend({

		tagName: 'option',

		autoRender: true,

		render: function(){
			View.prototype.render.apply(this,arguments);

			// listen DOM event
			this.$el.attr('id', this.model.get('id') );
		},

		getTemplateFunction: function() {
			return Handlebars.compile( '{{ name }}' );
		}

	});

	return MusicCategorieItemView;

});