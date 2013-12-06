define([
  'chaplin',
  'views/base/view',
  'text!templates/music/music.hbs',
  'views/music/tiles/music-categorie-tile-collection-view',
  'views/music/tiles/music-letter-tile-collection-view',
  'views/music/tiles/music-artist-info-tile-view',
  'views/music/tiles/music-album-tile-collection-view',
  'views/music/tiles/music-track-tile-collection-view',
  'models/collections/list-categories',
  'models/collections/list-letters-artists',
  'models/collections/list-album',
  'models/collections/list-tracks',
  'models/artist-info'
], function(Chaplin, 
    View, 
    template, 
    MusicCategorieTileCollectionView, 
    MusicArtistTileCollectionView, 
    ArtistInfoView,
    MusicAlbumTileCollectionView,
    MusicTrackTileCollectionView,
    ListCategories, 
    ListLettersArtists,
    ListAlbums,
    ListTracks,
    ArtistInfo) {
  'use strict';

  var MusicView = View.extend({

    id: 'music-view',

    autoRender: true,

    template: template,

    className: 'pure-g-r',

    regions: {
      'music-categorie-artist': "#music-categorie-artist",
      'music-artist': '#music-artist',
      'music-artist-album': '#music-artist-album',
      'music-track': '#music-track'
    },

    listen:{
      'artistSelected mediator': 'artistShow',
      'music:categorieSelected mediator': 'updateListArtist',
      'music:albumSelected mediator': 'updateListTracks'
    },

    initialize : function( options ){
      View.prototype.initialize.apply(this,arguments);


      // initilisation des variables globale de la vue
      this.listCategories = new ListCategories();
      this.listLettersArtists = new ListLettersArtists();
      this.artistInfo = new ArtistInfo();
      this.listAlbums = new ListAlbums();
      this.listTracks = new ListTracks();
    },

    render: function(){
      View.prototype.render.apply(this,arguments);

      // affichage de la liste des categories
      this.categoriesView = new MusicCategorieTileCollectionView( { 
        region: 'music-categorie-artist',
        collection: this.listCategories
      });
      this.subview('music-categorie', this.categoriesView);

      // affichage de la liste des artistes
      this.listArtistsView = new MusicArtistTileCollectionView( { 
        region: 'music-categorie-artist',
        collection: this.listLettersArtists
      });
      this.subview('music-categorie-artist', this.listArtistsView );

      // creation de l'info artiste
      this.artistInfoView = new ArtistInfoView({
          region: 'music-artist',
          model: this.artistInfo
      });
      this.subview('music-artist', this.artistInfoView );

      // creation de la liste des albums
      this.albumsView = new MusicAlbumTileCollectionView({
          region: 'music-artist-album',
          collection: this.listAlbums
      });
      this.subview('music-artist-list-album', this.albumsView );

      // creation de la vue des pistes
      this.tracksView = new MusicTrackTileCollectionView({
          region: 'music-track',
          collection: this.listTracks
      });
      this.subview('music-track', this.tracksView );

      // maj des collections par defaut
      this.listCategories.fetch( { reset : true } );
      this.listLettersArtists.fetch( { reset : true } );

    },

    updateListArtist: function( idCategorie ){
      this.listLettersArtists.idCategorie = idCategorie;
      this.listLettersArtists.fetch( { reset : true } );

    },

    updateListTracks: function( idAlbum ){
      this.listTracks.idAlbum = idAlbum;
      this.listTracks.fetch( { reset : true } );

    },

    attach: function(){
      View.prototype.attach.apply(this,arguments);

      // fixe la taille de la liste des artistes par rapport a la taille de l'ecran
      var topOffset = this.listArtistsView.$el.find('#music-list-letters-artist').offset();

      this.listArtistsView.$el.find('#music-list-letters-artist').css('height', $(window).height() - topOffset.top );

    },

    artistShow: function( artist ){
      var self = this;

      // MAJ des infos de l'artiste
      this.artistInfo.name = artist.get('name');
      this.artistInfo.fetch().done(function(){

        var topOffset = self.albumsView.$el.find('.table').offset();

        self.albumsView.$el.find('.table').css('height', $(window).height() - topOffset.top );
        self.tracksView.$el.find('.table').css('height', $(window).height() - topOffset.top );
      });

      // MAJ de la liste des albums
      this.listAlbums.idArtist = artist.get('id');
      this.listAlbums.fetch();

      // effacement de la liste des pistes
      this.listTracks.reset();
    }

  });

  return MusicView;
});
