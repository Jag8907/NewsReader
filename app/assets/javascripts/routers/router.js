NewReader.Routers.Router = Backbone.Router.extend({
  
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow"
  },
  
  feedsIndex: function () {
    NewReader.Collections.feeds.fetch();
    var feedIndexView = new NewReader.Views.FeedsIndex({collection: NewReader.Collections.feeds});
    this._swapView(feedIndexView);
  },
  
  feedShow: function (id) {
    var feed = NewReader.Collections.feeds.getOrFetch(id);
    if (feed.entries().length === 0) {
      feed.fetch();
    }
    var feedShowView = new NewReader.Views.FeedShow( {model: feed} );
    this._swapView(feedShowView);
  },
  
  _swapView: function (newView) {
    this.currentView && this.currentView.remove();
    this.$rootEl.html(newView.render().$el);
    this.currentView = newView;
  }
  
});