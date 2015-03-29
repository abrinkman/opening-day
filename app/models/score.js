import DS from 'ember-data';

export default DS.Model.extend({
  team1Name: DS.attr('string'),
  team2Name: DS.attr('string'),
  team1Runs: DS.attr('number'),
  team2Runs: DS.attr('number'),
  team1Hits: DS.attr('number'),
  team2Hits: DS.attr('number'),
  team1Errors: DS.attr('number'),
  team2Errors: DS.attr('number'),
  topBottom: DS.attr('string'),
  inning: DS.attr('number'),
  atBat: DS.attr('string'),
  pitching: DS.attr('string'),
  balls: DS.attr('number'),
  strikes: DS.attr('number'),
  outs: DS.attr('number')
});
