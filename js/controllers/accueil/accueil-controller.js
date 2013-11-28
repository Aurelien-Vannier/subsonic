define([
  'controllers/base/controller',
  'views/accueil/accueil-view'
], function(Controller, AccueilView) {
  'use strict';

  var AccueilController = Controller.extend({

    show: function(params) {

      this.view = new AccueilView({
        region: 'main'
      });

      this.menuActiveItem();
    }

  });

  return AccueilController;
});
