define([
	'chaplin',
	'views/main-view',
  'models/user',
	'views/menu-view'], 
function(
	Chaplin, 
	MainView,
  User,
	MenuView) {
  'use strict';

  var Controller = Chaplin.Controller.extend({
    // Place your application-specific controller features here.
    beforeAction: function() {
    	this.compose('container', MainView);
    	this.compose('menu', MenuView);

      if( !Chaplin.mediator.user.get('status') ){

        // si les parametres de connection sont erronés, on renvoi sur la page de parametrage.
        Chaplin.mediator.user.fetch();

        if( !Chaplin.mediator.user.get('status') ){
          Chaplin.helpers.redirectTo('settings/settings#show');
        }

      }
      
    },

    menuActiveItem: function(){
      
      // gestion de l'imte actif
      if(this.view && this.view.id){
        var idMenu = 'menu-' + this.view.id;
        Chaplin.mediator.publish('menu:activeItem', idMenu);
      }

      // desactivation des items non accessible sans parametres serveur
      if( this.model ){
        if( !Chaplin.mediator.user.get('status') ){
          Chaplin.mediator.publish('menu:hideLimitedItem', true);
        }   
      }

    }
  });

  return Controller;
});
