import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  "use strict";
  this.route('home', {path: '/'});
  this.route('with-style');
  this.route('debug-demo');
});

export default Router;
