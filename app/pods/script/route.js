import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.store.peekRecord('script', params.id);
  },
  actions: {
    willTransition: function() {
      //can be used to prevent a transition on make sure some state is ready for the next route
    }
  }

});
