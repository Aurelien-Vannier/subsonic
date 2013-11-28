define([
  'views/base/view'
], function(View) {
  'use strict';

  var SimpleModalView = View.extend({

    autoRender: true,

    id: 'simple-modal-view',

    container: 'body',

    initialize: function( options ){
      View.prototype.initialize.apply(this,arguments);      

      if( !_.isUndefined( options ) ){
        this.title = options.title;  
        this.message = options.message;
        this.callback = options.callback;
      }
    },

    render: function( options ){
      View.prototype.render.apply(this,arguments);
      var self = this;

      this.$el.dialog({
        modal: true,
        closeText: '',
        title: this.title,
        draggable: false,
        buttons: [
          {
            text: "Ok",
            click: function() {
              self.$el.dialog( "close" );
              self.callback;
            }
          }
        ]
      });
    },

    getTemplateFunction: function() {
      return Handlebars.compile('<p>' + this.message + '</p>');
    }

  });

  return SimpleModalView;
});
