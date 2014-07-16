NewReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds_index"],
  
  events: {
    "submit form": "submitFeed"
  },
  
  initialize: function(){
    this.listenTo(
      this.collection, "sync add reset remove", this.render
    );
  },
  
  submitFeed: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model = new NewReader.Models.Feed();
    this.model.set(params);
    this.collection.create(this.model, {
      success: function () {
        console.log("feed created");
      }
    });
  },
  
  render: function () {
    var renderedContent = this.template({ feeds: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});