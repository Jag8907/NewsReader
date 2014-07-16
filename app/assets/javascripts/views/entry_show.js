NewReader.Views.EntryShow = Backbone.View.extend({
  template: JST['entry_show'],
  
  events: {
    "click button#delete-entry": "destroyEntry"
  },
  
  destroyEntry: function (event) {
    event.preventDefault();
    this.model.destroy();
  },
  
  tagName: 'li',
  
  render: function () {
    var content = this.template({ entry: this.model });
    this.$el.html(content);
    return this;
  }
});