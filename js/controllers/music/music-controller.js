define([
  'controllers/base/controller',
  'views/music/music-view'
], function(Controller, MusicView) {
  'use strict';

  var MusicController = Controller.extend({

    show: function(params) {

      this.view = new MusicView({
        region: 'main'
      });

      this.menuActiveItem();
    }

  });

  return MusicController;
});
