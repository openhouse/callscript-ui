import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  scriptList: inject.service(),

  model(params) {
    this.set('scriptList.current', this.store.peekRecord('script', params.id));
    return this.get('scriptList.current');
  },
  actions: {
    willTransition() {
      // can be used to prevent a transition on make sure some state is ready for the next route
    }
  }

});
