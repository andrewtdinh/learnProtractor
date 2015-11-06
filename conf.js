// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },
  // Uncomment the below lines to run tests on both browsers simultaneously
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }],

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['specs/calc_spec.js', 'specs/pageObject_shortExample_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
