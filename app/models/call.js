import DS from 'ember-data';

const { Model, belongsTo, attr } = DS;

export default Model.extend({
  viewed: attr('boolean'),
  called: attr('boolean'),
  skipped: attr('boolean'),
  emailShared: attr('boolean'),
  fbShared: attr('boolean'),
  twitterShared: attr('boolean'),

  // relationships
  script: belongsTo('script'),
  recipient: belongsTo('recipient'),
  caller: belongsTo('caller')

});
