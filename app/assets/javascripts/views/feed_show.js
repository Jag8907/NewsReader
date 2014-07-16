NewReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feed_show"],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  
  events: {
    "click button#refresh": "refresh",
    "click button#delete-entry": "remove"
  },
  
  remove: function(event){
    $(event.currentTarget).parent().remove();
  },
  
  refresh: function (event) {
    event.preventDefault();
    this.model.fetch();
  },

  render: function () {
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);
    var that = this;
    this.model.entries().each(function (entry){
      var entryView = new NewReader.Views.EntryShow({ model: entry });
      var entryContent = entryView.render().$el;
      that.$el.find("#entry-list").append(entryContent);
    })
    return this;
  }
});