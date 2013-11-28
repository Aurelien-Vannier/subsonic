define([
  'controllers/base/controller',
  'views/settings/settings-view',
  'views/main-view',
  'views/menu-view'
], function(Controller, SettingsView, MainView, MenuView) {
  'use strict';

  var SettingsController = Controller.extend({

    beforeAction: function() {
      this.compose('container', MainView);
      this.compose('menu', MenuView);

    },

    show: function(params) {

      this.view = new SettingsView({
        region: 'main',
      });

      this.menuActiveItem();
    }

  });

  return SettingsController;
});
