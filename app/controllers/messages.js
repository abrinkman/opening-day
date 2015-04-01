import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    post : function () {
      var message = this.get('content').get('message');
      var newMessage = this.store.createRecord('message', {
        message: message
      });
      newMessage.save();
    }
  }
});
