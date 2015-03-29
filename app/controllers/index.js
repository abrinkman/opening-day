import Ember from 'ember';

export default Ember.Controller.extend({

  inningSuffix : function () {

  }.property(),

  inningSuffixObserver : function(){
    var inning = this.get('model').get('inning');

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

    this.set('inningSuffix', val);

  }.observes('content.inning'),

});
