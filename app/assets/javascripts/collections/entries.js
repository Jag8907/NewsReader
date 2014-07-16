NewReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.feed = options.feed;
  },
  model: NewReader.Models.Entry,
  
  url: function () {
    return this.feed.url() + '/entries';
  }
});
