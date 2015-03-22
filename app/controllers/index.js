import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    update : function () {
      var newScore = this.store.createRecord('score', {
        team1Name: 'Rockies',
        team2Name: 'Red Sox',
        team1Runs: 6,
        team2Runs: 1,
        team1Hits: 13,
        team2Hits: 5,
        team1Errors: 0,
        team2Errors: 1,
        atBat: 'Tulo',
        pitching: 'Papelbon'
      });
      newScore.save();
    }
  }
});
