import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    update : function () {

      var score = this.get('content');
      // var atBat = this.get('atBat');
      // var pitching = this.get('pitching');
      // debugger;

      // score.set('atBat', atBat);
      // score.set('pitching', pitching);
      score.save();
    }
  }
});
