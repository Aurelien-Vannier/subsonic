define([
  'views/base/view',
  'text!templates/accueil/tiles/accueil-user-tile.hbs'
], function(View, template) {
  'use strict';

  var AccueilUserTileView = View.extend({

    autoRender: true,

    template: template,

    bindings:{
      '#accueil-login': 'login'
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      this.stickit();
    }

  });

  return AccueilUserTileView;
});
