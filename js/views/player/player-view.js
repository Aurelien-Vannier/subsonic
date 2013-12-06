define([
  'chaplin',
  'views/base/view',
  'text!templates/player/player.hbs',
  'lib/utils'
], function(Chaplin, View, template, Utils) {
  'use strict';

  var PlayerView = View.extend({

    id: 'player-view',

    autoRender: true,

    template: template,

    initialize: function(){
      View.prototype.initialize.apply(this,arguments);

      _.bindAll(this)

      this.$('.audioPlayer').on('timeupdate', function(){
        console.log('timeupdate');
      });

      // listen DOM event
      this.delegate('click','#play-btn', this.playPause);

      this.delegate('click', '.volume', this.volumeUpDown);
 
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      // init jquery ui
      this.$el.find('#volume-slider').slider( {
        max : 1, 
        step: 0.1, 
        value : 1,
        stop: this.volumeUpDown
      });

      this.$el.find('#player-slider').slider({
        step: 1
      });
  
    },

    attach: function(){
      View.prototype.attach.apply(this,arguments);
      var self = this;

      // event listener when element is insert in dom.
      this.$('.audioPlayer').on('loadedmetadata', function(){
        console.log('loadedmetadata');
        self.$el.find('#player-slider').slider( "option", "max", self.$el.find('audio').prop("duration") );
        self.$el.find('.audio-total-duration').html( Utils.convertSecondsToMinutesAndSecondes( self.$el.find('audio').prop("duration") ) );
      });

      this.$('.audioPlayer').on('timeupdate', function(){
        console.log( Utils.convertSecondsToMinutesAndSecondes( self.$el.find('audio').prop("currentTime") ) );
        self.$el.find('.audio-actual-duration').html(Utils.convertSecondsToMinutesAndSecondes( self.$el.find('audio').prop("currentTime") ) );
        self.$el.find('#player-slider').slider( "option", "value", self.$el.find('audio').prop("currentTime") );
      });
    },

    playPause: function(){
      if( this.$el.find('.icon-play-pause').hasClass('fa-play') ){
        // lance la lecture
        this.$el.find('audio').trigger('play');
        // change l'icone
        this.$el.find('.icon-play-pause').removeClass('fa-play').addClass('fa-pause');
      } else {
        // met la lecture en pause
        this.$el.find('audio').trigger('pause');
        // change l'icone
        this.$el.find('.icon-play-pause').removeClass('fa-pause').addClass('fa-play');
      }
    },

    volumeUpDown: function( event ){
      var volumeValue = this.$el.find('audio').prop("volume");

      if( $(event.currentTarget).attr('id') == 'volume-down-btn' ){
        if( volumeValue > 0 ){
          volumeValue -= 0.1;
        }
      } else if( $(event.currentTarget).attr('id') == 'volume-up-btn' ){
        if( volumeValue < 1 ){
          volumeValue += 0.1;
        }
      } else {
        volumeValue = this.$el.find('#volume-slider').slider( "value" );
      }

      volumeValue = volumeValue.toFixed(2);

      console.log('Volume: ' + volumeValue);
      this.$el.find('audio').prop("volume", volumeValue);

      // maj de l'affichage du slider
      this.$el.find('#volume-slider').slider( "value", volumeValue );
    },

    canPlay:function(){
      console.log('canplay');
    }

  });

  return PlayerView;
});
