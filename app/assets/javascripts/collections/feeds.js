NewReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: NewReader.Models.Feed,
  
  getOrFetch: function (id) {
    var feeds = this;
    
    var feed;
    if (!(feed = this.get(id))) {
      feed = new NewReader.Models.Feed({ id: id });
      feed.fetch({
        success: function () { feeds.add(feed); }
      });
    }
    return feed;
  }
});

NewReader.Collections.feeds = new NewReader.Collections.Feeds();