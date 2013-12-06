define([
  'views/base/view',
  'text!templates/music/tiles/music-artist-info-tile.hbs'
], function(View, template) {
  'use strict';

  var ArtistInfoView = View.extend({
    // Automatically render after initialize
    autoRender: true,

    id: 'artist-info-view',

    template: template,

    render: function(){
      View.prototype.render.apply(this,arguments);
      
      this.stickit();
    },

    bindings:{
      '.artist-name': 'name',
      '.artist-photo': {
        observe: 'image',
        onGet: function(value){
          this.$el.find('.artist-photo').attr('src', value);
        }
      },
      '.artist-summary': {
        observe: 'summary',
        onGet: function(value){
          this.$el.find('.artist-summary').html(value);
        }
      }
    }

  });

  return ArtistInfoView;
});
