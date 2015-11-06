var AngularHome = require('../pages/angular_home');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new AngularHome();
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
  });
});
