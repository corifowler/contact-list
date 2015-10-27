import Backbone from 'backbone';

let ArtistModel = Backbone.Model.extend({

  urlRoot: 'http://api.parse.com/1/classes/top20songs',

  idAttribute: 'objectId'

});

export default ArtistModel;