import Ember from 'ember';

export default Ember.Controller.extend({

  inningSuffix : function () {

  }.property(),

  inningSuffixObserver : function(){
    var inning = this.get('model').get('inning');
    var val = this.inningSuffixChars(inning);
    this.set('inningSuffix', val);
  }.observes('content.inning'),

  actions : {
    update : function () {
      var score = this.get('content');
      score.save();
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
    }

  },

  inningSuffixChars : function(inning) {
    var val = 'th';
    if (inning === 1) {
      val = 'st';
    }
    else if (inning === 2) {
      val = 'nd';
    }
    else if (inning === 3) {
      val = 'rd';
    }
    return val;
  }

});
