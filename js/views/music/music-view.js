define([
  'chaplin',
  'views/base/view',
  'text!templates/music/music.hbs',
  'views/music/tiles/music-categorie-tile-collection-view',
  'models/collections/list-categories'
], function(Chaplin, View, template, MusicCategorieTileCollectionView, ListCategories) {
  'use strict';

  var MusicView = View.extend({

    id: 'music-view',

    autoRender: true,

    template: template,

    className: 'pure-g-r',

    regions: {
      'music-categorie': "#music-categorie"
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      var listCategories = new ListCategories();

      listCategories.fetch().done( function(){
        console.log(listCategories);
      });

      // affichage du message de bienvenu
      this.subview('music-categorie', new MusicCategorieTileCollectionView( { 
        region: 'music-categorie',
        collection: listCategories
      }));

    }

  });

  return MusicView;
});
