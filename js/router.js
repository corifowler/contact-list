import Backbone from 'backbone';
import $ from 'jquery';
import ArtistCollection from './artist_collection';
import listTemplate from './views/artist_list';
import artistTemplate from './views/individual_view';

let Router = Backbone.Router.extend({

  routes: {
    '': 'artistList',
    'individualView/:id': 'showIndividualArtist'
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.artists = new ArtistCollection();

    let router = this;

    this.$el.on('click', '.artist-list-item', function(event) {
      let $div = $(event.currentTarget);
      let artistId = $div.data('artist-id');
      router.navigate(`artists/${artistId}`);
      router.showIndividualArtist(artistId);
    });

  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  artistList: function() {
    this.showSpinner();
    console.log('grabbing artists');
    this.artists.fetch().then(function() {

    this.$el.html(listTemplate(this.artists.toJSON()));

    }.bind(this));
  },

  showIndividualArtist: function(artistId) {
    console.log('show individual artists');
    let artist = this.artists.get(artistId);
    
    if (artist) {
      this.$el.html(artistTemplate(artist.toJSON()));  
    } else {
      let artist = this.artists.add({objectId: artistId});
      let router = this;
      this.showSpinner();
      artist.fetch().then(function () {
        router.$el.html(artistTemplate(artist.toJSON()));
      });
    }

  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;
