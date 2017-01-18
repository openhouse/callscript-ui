import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  fastboot: inject.service(),
  scriptList: inject.service(),

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
          title: 'Health Care',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ---- -----, a constituent calling to thank Senator/Rep ___ for supporting affordable health care and ask for continued support. I\'m one of 20 million Americans who count on a marketplace plan for insurance. If the Affordable Care Act is overturned, I will lose access to healthcare. I want the ((Senator/Representative)) to block attempts to repeal the ACA.',
          redText: 'I\'m ---- -----, a constituent calling to ask Senator/Rep to support affordable healthcare. I\'m one of 20 million Americans who count on a marketplace plan for insurance. If the Affordable Care Act is overturned, I will lose access to healthcare. I want the ((Senator/Representative)) to vote against repealing the ACA.'
        },
        relationships: {}
      },
      {
        id: 2,
        type: 'script',
        attributes: {
          title: 'Immigration',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ----- ----, a constituent calling to thank Senator/Rep ____ for supporting compassionate immigration policies, and ask for continued support. I ask that ((he/she)) put pressure on the Trump transition team to keep the previous adminstration\'s immigration plans in place, particularly DACA. I ask that the ((he/she)) publicly oppose any attempts to overturn Obama\'s executive orders on immigration.	',
          redText: 'I\'m ----- ----, a constituent who supports compassionate immigration policies. I ask that Senator/Rep _____ urge the Trump transition team to keep the previous adminstration\'s immigration policies in place, particularly DACA. America is a nation of immigrants. We do not close our doors on people in need.'
        },
        relationships: {}
      },
      {
        id: 3,
        type: 'script',
        attributes: {
          title: 'Reproductive Rights',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ---- -----, a consituent calling to thank Senator/Rep ____ for supporting women\'s reprodcutive rights. I fully support a woman\'s right to make her own healthcare decisions and I am afraid Donald Trump puts that right in jeopardy. I want the ((Senator/Rep)) to let the Trump transition team know publicly that ((he/she)) will not support anti-choice policies or SCOTUS nominees proposed by the Trump Administration.',
          redText: 'I\'m ---- -----, a consituent calling to let ((Name)) know that I support a woman\'s right to make her own healthcare decisions. I am appalled by Donald Trump\'s promise to "overturn Roe v. Wade." 70% of American\'s support this landmark decision. I call on my ((Senator/Rep)) to publicly support the will of the people.'
        },
        relationships: {}
      },
      {
        id: 4,
        type: 'script',
        attributes: {
          title: 'Civil Liberties / First Amendment',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ---- ---- a consituent calling to ask ((Name)) to publicly denounce Donald Trump\'s direct attacks on the First Amendment. Specifically, the ((Senator/Representative)) should denounce Trump\'s hostility toward the press and repeated threats to make a "database of Muslims." A free press is essential to a free society; religious freedom is America\'s most essential value. Please ask the ((Senator/Representative)) to pressure the Trump transition team to observe traditon and allow journalists reasonable access to the White House and the President-Elect and to stop attacking freedom of religion.',
          redText: 'I\'m ---- ---- a consituent calling to ask ((Name)) to publicly denounce Donald Trump\'s direct attacks on the First Amendment. Specifically, the ((Senator/Representative)) should denounce Trump\'s hostility toward the press and repeated threats to make a "database of Muslims." A free press is essential to a free society; religious freedom is America\'s most essential value. Please ask the ((Senator/Representative)) to pressure the Trump transition team to observe traditon and allow journalists reasonable access to the White House and the President-Elect and to stop attacking freedom of religion.'
        },
        relationships: {}
      },
      {
        id: 5,
        type: 'script',
        attributes: {
          title: 'Marriage Equality',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ---- -----, a constituent calling to thank Senator/Rep ____ for supporting marriage equality, and ask that ((he/she)) publicly reiterate this support in light of the recent election. I would like the ((Senator/Rep)) to make it clear to Trump\'s transition team that SCOTUS nominees who are anti-marriage equality will not be confirmed.',
          redText: 'I\'m calling to let the Senator/Rep know that I support marriage equality as the law of the land. The Supreme Court has spoken. I would like the ((Senator/Rep)) to make it clear that he will uphold the will of court and the American people. Please ask the Senator to change his position and declare to Trump\'s transition team that SCOTUS nominees who are anti-marriage equality will be blocked.'
        },
        relationships: {}
      },
      {
        id: 6,
        type: 'script',
        attributes: {
          title: 'Police Brutality / Criminal Justice',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m --- ----, a constituent calling to thank Senator/Rep ____ for working toward racial equality, and ask that ((he/she)) publicly remind the Trump administration that Congress will not stand for policies that promote institutional racism. Specifically, I would like the ((Senator/Representative)) to condemn Trump\'s stance on stop-and-frisk immediately and repeatedly as we transition to Trump\'s presidency.',
          redText: 'I\'m --- ----, a constituent calling to remind Senator/Rep _____ that racial equality is a cornerstone of American values. I want ((him/her)) to publicly denounce our President-Elect\'s racism and reassure the American people that Congress will not stand for policies that promote institutional racism. Specifically, I would like the ((Senator/Representative)) to condemn Trump\'s stance on stop-and-frisk immediately and repeatedly as we transition to Trump\'s presidency.'
        },
        relationships: {}
      },
      {
        id: 7,
        type: 'script',
        attributes: {
          title: 'Refugees',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ---- -----, a constituent calling to thank Senator/Rep ____ for supporting the state department\'s refugee program, and ask for continued support. I request that ((he/she)) put pressure on President-Elect Trump to continue to allow refugees into the U.S. The public is not educated about the State Department\'s refugee program. Please ask Senator/Rep ____ to spread awareness about the extensive vetting of refugees.',
          redText: 'I\'m ---- -----, a constituent calling to ask ((Name)) to put pressure on President-Elect Trump to continue to allow refugees into the U.S. The State Department vets all refugees extensively. Turning away people in need does not reflect American values. Please ask the ((Senator/Representative)) to denounce any plans to deport refugees or eliminate programs to accept new refugees.'
        },
        relationships: {}
      },
      {
        id: 8,
        type: 'script',
        attributes: {
          title: 'Gun Violence Prevention',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m ----- ----, a constituent concerned about the 91 Americans who are killed with guns every day. Senator/Rep____ has supported common-sense gun laws, and we need ((his/her)) help more than ever. Trump has promised never to let the NRA down, so we need congress to step up. I\'m calling to ask Senator/Rep ___ to continue to fight for common-sense gun laws, especially background checks for every gun sale. Please ask the ((Senator/Rep)) to let the American people know when the bill for background checks is coming.',
          redText: 'I\'m ----- ----, a constituent concerned about the 91 Americans who are killed with guns every day. Since Trump has promised never to let the NRA down, we need congress to step up. I\'m calling to ask Senator/Rep ___ to change ((his/her)) position on background checks that 90% of Americans support. Senator/Rep____ needs to start fighting for common-sense gun laws. Please ask the ((Senator/Rep)) to let the American people know when the bill for background checks is coming.'
        },
        relationships: {}
      },
      {
        id: 9,
        type: 'script',
        attributes: {
          title: 'Climate Change',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I’m ---- -----, a constituent concerned about the President-Elect’s record of denying climate change. I ask that the ((Senator/Representative)) publicly condemn Trump’s threats to repeal the Clean Power Plan and withdraw from the Paris agreement. I want the ((Senator/Representative)) to refuse to compromise with the President-Elect if he appoints climate change deniers.',
          redText: 'I’m ---- -----, a constituent concerned about the President-Elect’s record of denying climate change. I ask that the ((Senator/Representative)) publicly condemn Trump’s threats to repeal the Clean Power Plan and withdraw from the Paris agreement. I want the ((Senator/Representative)) to refuse to compromise with the President-Elect if he appoints climate change deniers.'
        },
        relationships: {}
      },
      {
        id: 10,
        type: 'script',
        attributes: {
          title: 'Tell Reps #NoBannon',
          dateCreated: '2016-11-16 09:30:26.123',
          callCount: 10,
          skipCount: 1,
          viewCount: 83,
          emailShareCount: 1,
          fbShareCount: 2,
          twitterShareCount: 1,
          sourceTitle: '"We\'re His Problem Now" Calling Sheet',
          sourceURL: 'https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=sharing&sle=true#',
          blueText: 'I\'m my name is ---- ---- and I\'m a constituent calling to thank Rep/Sen _____ for condemning Stephen Bannon\'s racism. I ask that the ((Senator/Representative)) continue to pressure the Trump transition team and refuse to work with them if they appoint racists. Rep/Sen ____ needs to continue to protect American values.',
          redText: 'Hi, my name is ---- ----, and I\'m a constituent. I am calling to ask that Rep/Sen _______ refuse to work with the Trump transition team until Stephen Bannon is removed from his staff. Bannon is a white supremacist and an anti-Semite. Step up and protect American values now.'
        },
        relationships: {}
      }]
    });
    this.set('scriptList.scripts', this.store.peekAll('script'));
    return this.get('scriptList.scripts');
  }
});
