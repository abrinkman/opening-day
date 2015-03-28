import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('score', '-JlWUisKqrCagI5A5l6z');
  }
});