import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['messages'],

  actions : {

    update : function () {
      var model = this.get('content');
      model.save();
    },

    valueUp : function (field) {
      var model = this.get('content');
      var value = model.get(field) + 1;
      model.set(field, value);
      model.save();
    },

    valueDown : function (field) {
      var model = this.get('content');
      var value = model.get(field) - 1;

      if (field === 'inning' && value < 1) {
        value = 1;
      }

      if (value < 0) {
        value = 0;
      }

      model.set(field, value);
      model.save();
    },

    toggle : function (field) {
      var model = this.get('content');
      var value = model.get('topBottom');
      value = value === 'Top' ? 'Bottom' : 'Top';
      model.set(field, value);
      model.save();
    },

    set : function (field, value) {
      var model = this.get('content');
      model.set(field, value);
      model.save();
    },

    clearMessages : function() {
      this.get('controllers.messages').send('clear');
    }

  },

  ball1 : function() {

  }.property(),

  ball2 : function() {

  }.property(),

  ball3 : function() {

  }.property(),

  ballsObserver : function() {
    var balls = this.get('model').get('balls');
    this.set('ball1', false);
    this.set('ball2', false);
    this.set('ball3', false);

    if (balls === 1) {
      this.set('ball1', true);
    }
    if (balls === 2) {
      this.set('ball2', true);
    }
    if (balls === 3) {
      this.set('ball3', true);
    }
  }.observes('content.balls'),

  strike1 : function() {

  }.property(),

  strike2 : function() {

  }.property(),

  strikesObserver : function() {
    var strikes = this.get('model').get('strikes');
    this.set('strike1', false);
    this.set('strike2', false);

    if (strikes === 1) {
      this.set('strike1', true);
    }
    if (strikes === 2) {
      this.set('strike2', true);
    }
  }.observes('content.strikes'),

  out1 : function() {

  }.property(),

  out2 : function() {

  }.property(),

  outsObserver : function() {
    var outs = this.get('model').get('outs');
    this.set('out1', false);
    this.set('out2', false);

    if (outs === 1) {
      this.set('out1', true);
    }
    if (outs === 2) {
      this.set('out2', true);
    }
  }.observes('content.outs')

});
