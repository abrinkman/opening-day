import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('message');
  }

  // model : function() {
  //   return this.store.find('message', {
  //     orderBy: 'timestamp'
  //   });
  // }
});