import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  fastboot: inject.service(),
  model() {
    let shoebox = this.get('fastboot.shoebox');
    let shoeboxStore = shoebox.retrieve('my-store');
    let isFastBoot = this.get('fastboot.isFastBoot');
    if (isFastBoot) {
      if (!shoeboxStore) {
        shoeboxStore = {};
        shoebox.put('my-store', shoeboxStore);
      }
      shoeboxStore.request = this.get('fastboot.request');
    }

    this.store.push({
      data: [{
        id: 1,
        type: 'script',
        attributes: {
          title: 'Tell Reps #NoBannon',
          dateCreated: '2013-02-08 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          posiText: 'My name is ---- ---- and I\'m a constituent calling to thank Senator Murkowski for condemning Stephen Bannon\'s racism. I ask that the Senator continue to pressure the Trump transition team and refuse to work with them if they appoint racists. Senator Murkowski needs to continue to protect American values.',
          negiText: 'My name is ---- ---- and I\'m a constituent calling to thank Senator Murkowski for condemning Stephen Bannon\'s racism. I ask that the Senator continue to pressure the Trump transition team and refuse to work with them if they appoint racists. Senator Murkowski needs to continue to protect American values.'
        },
        relationships: {}
      }]
    });
  }
});
