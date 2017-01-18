import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const { Router } = Ember;

const AppRouter = Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

AppRouter.map(function() {
  this.route('script', { path: '/script/:id' });

  this.route('place', { path: '/' }, function() {
    this.route('scripts', { path: '/' }, function() {
      this.route('script', { path: '/' }, function() {
        this.route('calls', { path: '/' }, function() {
          this.route('call', { path: '/' });
        });
      });
    });
  });
  this.route('home');
  this.route('about');
});

export default AppRouter;
