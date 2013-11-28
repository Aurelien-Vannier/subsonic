define(['underscore', 'chaplin'], function(_, Chaplin) {
    'use strict';
    var i18n;
    String.prototype.fillWith = function(strings) {
      var args;
      args = strings;
      return this.replace(/{(\d+)}/g, function(match, number) {
        if (typeof args[number] !== 'undefined') {
          return args[number];
        } else {
          return match;
        }
      });
    };
    i18n = {
      localization: {},
      __locale: null,
      defaultLocale: 'fr',
      pathToLocale: 'locale',
      init: function() {
        var _this = this;
        this.__locale = window.__locale || null;
        if (this.__locale == null) {
          this.__locale = this.defaultLocale;
        }
        //if (this.__locale !== this.defaultLocale) {
          return require(["text!" + this.pathToLocale + "/" + this.__locale + ".json"], function(localization) {
            return _this.setLocalization(localization);
          });
        //}
      },
      setDefault: function(locale) {
        return this.defaultLocale = this.__locale = locale;
      },
      setLocalization: function(localization) {
        return this.localization = JSON.parse(localization);
      },
      translate: function(id, vars) {
        var template, _ref, _ref1;
        if (vars == null) {
          vars = {};
        }
        template = ((_ref = this.localization[this.__locale]) != null ? _ref[id] : void 0) || ((_ref1 = this.localization[this.__locale.slice(0, 2)]) != null ? _ref1[id] : void 0);
        if (template == null) {
          template = this.__locale !== this.defaultLocale ? "(?) " + id : "" + id;
        }
        return _.template(template, vars);
      },
      t: function(i18n_key) {
        var args, result, _args;
        result = i18n.translate(i18n_key);
        args = Array.prototype.slice.call(arguments, 0);
        if (_.isArray(args[1])) {
          _args = args[1];
        } else {
          _args = args;
        }
        if (!_.isString(_args[_args.length - 1])) {
          _args.pop();
        }
        _args.shift();
        return result.fillWith(_args);
      }
    };
    if (typeof Object.seal === "function") {
      Object.seal(i18n);
    }
    return i18n;
  });