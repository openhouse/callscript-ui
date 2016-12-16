import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

AppRouter.map(function() {
  this.route('place', { path: '/' }, function() {
    this.route('scripts', { path: '/' }, function() {
      this.route('script', { path: '/' }, function() {
        this.route('calls', { path: '/' }, function() {
          this.route('call', { path: '/' });
        });
      });
    });
  });
});

export default AppRouter;
