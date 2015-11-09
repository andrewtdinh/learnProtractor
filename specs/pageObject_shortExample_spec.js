var AngularHome = require('../pages/angular_home');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new AngularHome();
    angularHomepage.get();

    angularHomepage.setName('Andrew');

    expect(angularHomepage.getGreeting()).toEqual('Hello Andrew!');
  });
});
