import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: 'timestamp',
  sortAscending: false,

  actions : {
    post : function () {
      var message = this.get('content').get('message');
      var newMessage = this.store.createRecord('message', {
        message: message,
        timestamp: new Date().getTime()
      });
      newMessage.save();
      this.get('content').set('message', '');
    }
  }
});
