import Ember from 'ember';

export default Ember.Controller.extend({
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
      if (value < 0){
        value = 0;
      }
      model.set(field, value);
      model.save();
    },

    toggle : function (field) {
      var model = this.get('content');
      var value = model.get('topBottom');
      value = value == "top" ? "bottom" : "top";
      model.set(field, value);
      model.save();
    }

  }

});
