import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
});

Router.reopen({
  // Amazon s3 doesn't work with the auto routing, it will return a 403, forbidden.
  location: 'hash'
});

export default Router;
