import Ember from 'ember';
const { computed, Service } = Ember;

export default Service.extend({
  scripts: null,
  current: null,

  ordered: computed.alias('scripts'),
  length: computed.alias('ordered.length'),

  index: computed('ordered', 'current', function() {
    let ordered = this.get('ordered');
    let current = this.get('current');
    return ordered.indexOf(current);
  }),

  next: computed('ordered', 'current', 'index', function() {
    let length = this.get('length');
    let ordered = this.get('ordered');
    let index = this.get('index');
    return ordered.objectAt((index + 1) % length);
  }),
  prev: computed('ordered', 'current', 'index', function() {
    let length = this.get('length');
    let ordered = this.get('ordered');
    let index = this.get('index');
    return ordered.objectAt((index - 1) % length);
  })

});
