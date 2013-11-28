define([
  'chaplin',
  'views/base/view',
  'text!templates/settings/tiles/settings-server-tile.hbs',
  'views/common/simple-modal-view',
  'models/user'
], function(Chaplin, View, template, SimpleModalView, User) {
  'use strict';

  var SettingsServerTileView = View.extend({

    autoRender: true,

    template: template,

    bindings:{
      '#server': 'server',
      '#user': 'login',
      '#password': 'password'
    },

    initialize: function(){
      View.prototype.initialize.apply(this,arguments);

      // listen DOM event
      this.delegate('click','#test', this.testConnection);
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      this.stickit();
    },

    testConnection: function(){
      var self = this;

      this.model.connect({
        success : function(){

          // sauvegarde de l'utilisateur
          self.model.save();
          // rechargement de la page
          self.publishEvent('menu:hideLimitedItem', false);
        },

        error : function( response ){

          var modal = new SimpleModalView({
            title : "Erreur",
            message : "Erreur de connexion..."
          });

        },

        complete : function(){
          // maj du status
          self.updateStatus();
        }
      });
    },

    updateStatus: function(){
      if( this.model.get('status') ){
        this.$el.find('#status').removeClass('fa fa-times red').addClass('fa fa-check green')
      } else {
        this.$el.find('#status').removeClass('fa fa-check green').addClass('fa fa-times red')
      }
    }

  });

  return SettingsServerTileView;
});
