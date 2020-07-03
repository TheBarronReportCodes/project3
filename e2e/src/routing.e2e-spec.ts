import { browser, element, by } from 'protractor';

describe('Routing Tests', function() {
  it('should navigate to welcome page and return Brackets App as text', function() {
    browser.get('/');
    var result = element(by.id('subpageTitle'));

    expect(result.getText()).toEqual('Brackets App');
  });

  it('should navigate to registration page', function() {
    browser.get('/');
    element(by.id('registrationLink')).click();
    var result = element(by.id('subpageTitle'));

    expect(result.getText()).toEqual('Register Players');
  });

  it('should navigate to brackets page', function() {
    browser.get('/');
    element(by.id('bracketsLink')).click();
    var result = element(by.id('subpageTitle'));
    expect(result.getText()).toEqual('Brackets');
  });

  it('should navigate from a different page back to the welcome page', function() {
    browser.get('/');
    element(by.id('registrationLink')).click();
    var result0 = element(by.id('subpageTitle'));
    expect(result0.getText()).toEqual('Register Players');

    element(by.id('bracketsLink')).click();
    var result1 = element(by.id('subpageTitle'));
    expect(result1.getText()).toEqual('Brackets');

    element(by.id('welcomeLink')).click();
    var result2 = element(by.id('subpageTitle'));
    expect(result2.getText()).toEqual('Brackets App');
  });
});
