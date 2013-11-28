define([
  'underscore',
  'chaplin',
  'i18n',
  'models/user'
], function(_, Chaplin, i18n, User) {
  'use strict'

  // Application-specific utilities
  // ------------------------------

  // Delegate to Chaplin’s utils module
  var utils = Chaplin.utils.beget(Chaplin.utils);

  // Add additional application-specific properties and methods

  _(utils).extend({

    // locale utils
    locale: {
      
      getTranslation: function(i18n_key, args){
        var args, result;
        result = i18n.t(i18n_key, args);
        result = Handlebars.Utils.escapeExpression(result);
        return new Handlebars.SafeString(result).string.replace('&#x27;', "'");
      },
    
    },

    makeRequestOptions: function( options ){
        var request = { dataType: "json" };

        if( options.user && options.action ){
          
          // creation de l'url
          request.url = options.user.get('server') + '/rest/' + options.action + '.view';

          // ajout des datas
          if( options.data ){
            request.data = options.data;
          } else {
            request.data = {};
          }
          
          request.data.u = options.user.get('login'),
          request.data.p = options.user.get('password'),
          request.data.v = '1.9.0',
          request.data.f = 'jsonp',
          request.data.c = 'subsonicapp'

          request.success = options.success;
          request.error = options.error;
          request.complete = options.complete;

        } else {
          throw "User and Action are mandatory..."
        }

        return request;
      },

      makeUrlRequest: function( ){

      }
  });

  return utils;
});
