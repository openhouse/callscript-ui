import Ember from 'ember';
const { Controller, inject } = Ember;

export default Controller.extend({
  scriptList: inject.service(),
  anonSession: inject.service()
});
