define([
  'chaplin',
  'views/base/view',
  'text!templates/accueil/accueil.hbs',
  'views/accueil/tiles/accueil-user-tile-view',
  'views/accueil/tiles/accueil-info-serveur-tile-view',
  'views/common/simple-modal-view',
  "lib/utils"
], function(Chaplin, View, template, AccueilUserTileView, AccueilServerInfoTileView, SimpleModalView, Utils) {
  'use strict';

  var AccueilView = View.extend({

    id: 'accueil-view',

    autoRender: true,

    template: template,

    regions: {
      'accueil-user': "#accueil-user",
      'accueil-info-serveur': '#accueil-info-serveur'
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      // affichage du message de bienvenu
      this.subview('accueil-user', new AccueilUserTileView( { 
        region: 'accueil-user',
        model : Chaplin.mediator.user
      }));

      // affichage des infos du serveur
      this.subview('accueil-info-serveur', new AccueilServerInfoTileView( { 
        region: 'accueil-info-serveur',
      }));
    }

  });

  return AccueilView;
});
