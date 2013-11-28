define([
  'chaplin',
  'views/base/view',
  'text!templates/settings/settings.hbs',
  'views/settings/tiles/settings-server-tile-view'
], function(Chaplin, View, template, ServerTileView) {
  'use strict';

  var SettingsView = View.extend({

    id: 'settings-view',

    autoRender: true,

    template: template,

    regions: {
      'settings-server': "#settings-server"
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      this.subview('settings-server', new ServerTileView( { 
          region: 'settings-server',
          model : Chaplin.mediator.user
        }) );
    }

  });

  return SettingsView;
});
