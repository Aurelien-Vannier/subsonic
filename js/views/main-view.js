define(['views/base/view', 'text!templates/main.hbs'], function(View, template) {
  'use strict';

  var MainView = View.extend({
    container: 'body',
    id: 'application-container',
    regions: {
      header: "#header-container",
      menu: "#menu-container",
      main: '#main-container'
    },
    template: template
  });

  return MainView;
});
