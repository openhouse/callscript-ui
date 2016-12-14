import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  // attributes
  title: attr('string'),
  posiText: attr('string'),
  negiText: attr('string'),

  dateCreated: attr('date'),
  viewCount: attr('number'),
  callCount: attr('number'),
  skipCount: attr('number'),
  emailShareCount: attr('number'),
  fbShareCount: attr('number'),
  twitterShareCount: attr('number')

  // relationships
  // computed properties
});
