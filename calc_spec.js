// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(6);
    element(by.model('second')).sendKeys(7);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('13'); // This is wrong!
  });
});
