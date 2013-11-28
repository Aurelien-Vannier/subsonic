define(['chaplin', 'i18n', 'models/user', 'localstorage', 'stickit'], function(Chaplin, i18n, User) {
  'use strict';

  // The application object
  // Choose a meaningful name for your application
  var Application = Chaplin.Application.extend({
    // Set your application name here so the document title is set to
    // “Controller title – Site title” (see Layout#adjustTitle)
    title: 'Chaplin Example Application',
    start: function() {
      // You can fetch some data here and start app
      // (by calling supermethod) after that.
      Chaplin.Application.prototype.start.apply(this, arguments);

      // activate I18N support
      i18n.init();

    },

    // Create additional mediator properties
    // -------------------------------------
    initMediator: function() {
      // Add additional application-specific properties and methods
      // e.g. mediator.prop = null
      // Create a user property
      Chaplin.mediator.user = new User();
      
      // Add additional application-specific properties and methods
      // Seal the mediator
      Chaplin.mediator.seal();
    }
  });

  return Application;
});
