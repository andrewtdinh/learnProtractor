var AngularHome = function() {
  this.nameInput = element(by.model('yourName'));
  this.greeting = element(by.binding('yourName'));

  this.get = function() {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    this.nameInput.sendKeys(name);
  };

  this.getGreeting = function() {
    return this.greeting.getText();
  };
};

module.exports = AngularHome
