import { browser, element, by, logging } from 'protractor';

describe('Routing Tests', function() {
  it('should navigate to welcome page and return Brackets App as text', function() {
    browser.get('/');
    var result = element(by.id('subpageTitle'));

    expect(result.getText()).toEqual('Brackets App');
  });

  it('should navigate to registration page', function() {
    browser.get('/');
    element(by.id('registrationLink'));

    expect(result.getText()).toEqual('Brackets App');
  });
});
