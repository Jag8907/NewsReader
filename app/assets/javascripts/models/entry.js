NewReader.Models.Entry = Backbone.Model.extend({
  // initialize: function (options) {
  //   this.feed = options.feed
  // },
  urlRoot: function () {
   return "api/feeds/" + this.get("feed_id") + "/entries/"; 
  }
});