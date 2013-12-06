define([
  'controllers/base/controller',
  'views/player/player-view'
], function(Controller, PlayerView) {
  'use strict';

  var PlayerController = Controller.extend({

    show: function(params) {

      this.view = new PlayerView({
        region: 'main'
      });

      this.menuActiveItem();
    }

  });

  return PlayerController;
});
