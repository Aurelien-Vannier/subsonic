define([
  'handlebars',
  'chaplin',
  'lib/utils',
  'i18n'
], function(Handlebars, Chaplin, utils, i18n) {
  'use strict';

  // Application-specific Handlebars helpers
  // -------------------------------------------

  // Get Chaplin-declared named routes. {{#url "like" "105"}}{{/url}}.
  Handlebars.registerHelper('url', function(routeName) {
    var params = [].slice.call(arguments, 1);
    var options = params.pop();
    return Chaplin.helpers.reverse(routeName, params);
  });

  // i18n support 
  Handlebars.registerHelper('locale', function(i18n_key) {
      var args, result;
      args = Array.prototype.slice.call(arguments, 0);
      result = i18n.t(i18n_key, args);
      result = Handlebars.Utils.escapeExpression(result);
      return new Handlebars.SafeString(result).string.replace('&#x27;', "'");
  });

    /**
   * If Equals value1 value2
  */
  Handlebars.registerHelper('ifEquals', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
});
