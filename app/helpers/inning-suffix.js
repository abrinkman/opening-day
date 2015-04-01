import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(value, options) {

  var suffix = 'th';
  if (value === 1) {
    suffix = 'st';
  }
  else if (value === 2) {
    suffix = 'nd';
  }
  else if (value === 3) {
    suffix = 'rd';
  }

  return value + suffix;

});