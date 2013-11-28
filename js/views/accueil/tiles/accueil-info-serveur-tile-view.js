define([
  'views/base/view',
  'text!templates/accueil/tiles/accueil-info-serveur-tile.hbs',
  'models/collections/list-artists'
], function(View, template, ListArtists) {
  'use strict';

  var AccueilServerInfoTileView = View.extend({

    autoRender: true,

    template: template,

    initialize : function( options ){
      View.prototype.initialize.apply(this,arguments);

      this.listArtists = new ListArtists();
    },

    render: function(){
      View.prototype.render.apply(this,arguments);
      var self = this;

      this.listArtists.getTotalArtiste().done( function(){
        self.$el.find('#nbArtistes').html( self.listArtists.total );
      });

      //this.stickit();
    }

  });

  return AccueilServerInfoTileView;
});
