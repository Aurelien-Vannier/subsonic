// Configure the AMD module loader
requirejs.config({
  // The path where your JavaScripts are located
  baseUrl: './js/',
  // Specify the paths of vendor libraries
  paths: {
    jquery: 'components/jquery/jquery',
    jqueryui: 'components/jqueryui/jquery-ui',
    underscore: 'components/lodash/dist/lodash',
    backbone: 'components/backbone/backbone',
    handlebars: 'components/handlebars/handlebars',
    text: 'components/requirejs-text/text',
    chaplin: 'components/chaplin/chaplin',
    i18n: 'components/requirejs/plugins/i18n',

    // backbone plugins
    localstorage: 'components/backbone/plugins/bb-localstorage',
    stickit: 'components/backbone/plugins/bb-stickit'
  },
  // Underscore and Backbone are not AMD-capable per default,
  // so we need to use the AMD wrapping of RequireJS
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery', 'jqueryui'],
      exports: 'Backbone'
    },
    jqueryui: {
      deps: ['jquery']
    },
    handlebars: {
      exports: 'Handlebars'
    },
    stickit: {
        deps: ['backbone']
    },
    localstorage: {
        deps: ['backbone']
    }
  }
  // For easier development, disable browser caching
  // Of course, this should be removed in a production environment
  //, urlArgs: 'bust=' +  (new Date()).getTime()
});

// Bootstrap the application
require(['application', 'routes'], function(Application, routes) {
  new Application({routes: routes, controllerSuffix: '-controller', root: '/subsonic/'});
});