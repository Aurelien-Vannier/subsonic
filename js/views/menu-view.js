define(['views/base/view', 'text!templates/menu.hbs'], function(View, template) {
  'use strict';

  var MenuView = View.extend({
    id: 'menu-view',
    region: 'menu',
    className: 'pure-menu pure-menu-open pure-menu-horizontal',
    template: template,

    listen:{
    	'menu:activeItem mediator': 'activeItem',
      'menu:hideLimitedItem mediator': 'hideItem'
    },

    activeItem: function( idItem ){
    	this.$el.find('li').removeClass( 'pure-menu-selected' )
    	this.$el.find( '#' + idItem).addClass( 'pure-menu-selected' );
    },

    hideItem: function( hide ){
      if( hide ){
        this.$el.find('.limited').addClass('pure-menu-disabled');
      } else {
        this.$el.find('.limited').removeClass('pure-menu-disabled');
      }     
    }

  });

  return MenuView;
});
