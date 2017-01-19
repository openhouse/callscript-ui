/*
anonymous session
uuid stored in cookie
*/

import Ember from 'ember';
import { v4 } from 'ember-uuid';

const { inject, computed, Service } = Ember;

export default Service.extend({

  cookies: inject.service(),

  allCookies: computed(function() {
    let cookieService = this.get('cookies');
    cookieService.write('now', new Date().getTime());
    return cookieService.read();
  }),

  hasID: computed.notEmpty('allCookies.callScriptAnonId'),

  id: computed(function() {
    // use session id from cookie
    if (this.get('hasID')) {
      return this.get('allCookies.callScriptAnonId');
    }
    // generate new UUID, save to cookie, and return
    let id = v4();
    this.get('cookies').write('callScriptAnonId', id);
    return id;
  })

});
