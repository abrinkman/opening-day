import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['content.message'],
  sortAscending: true,

  actions : {
    post : function () {
      var message = this.get('content').get('message');
      var newMessage = this.store.createRecord('message', {
        message: message,
        timestamp: new Date().getTime()
      });
      newMessage.save();
      this.get('content').set('message', '');
    },

    clear : function () {
      this.store.findAll('message').then(function(records) {
        records.forEach(function(record) {
          record.destroyRecord();
        });
      });
    }
  }
});
