import { browser, element, by, logging } from 'protractor';

describe('Successful Scenario Tests', function() {
  describe('Input values and registerContestants()', function() {
    it('should update players array on registration page', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      var input1 = element(by.id('contestant0'));
      input1.sendKeys('Goku');
      expect(input1.getAttribute('value')).toEqual('Goku');

      var input2 = element(by.id('contestant1'));
      input2.sendKeys('Vegeta');
      expect(input2.getAttribute('value')).toEqual('Vegeta');
    });

    it('should register contestants successfully', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      var input1 = element(by.id('contestant0'));
      input1.sendKeys('Goku');
      var input2 = element(by.id('contestant1'));
      input2.sendKeys('Vegeta');

      element(by.id('registerContestantsButton')).click();
      var result = element(by.id('registrationMessage'));
      expect(result.getText()).toEqual('Goku,Vegeta');
    });

  });

  describe('Autofill Tests', function() {
    it('should successfully autofill two players', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      element(by.id('autofillTwoButton')).click();

      var input1 = element(by.id('contestant0'));
      var input2 = element(by.id('contestant1'));
      expect(input1.getAttribute('value')).toEqual('Zoe');
      expect(input2.getAttribute('value')).toEqual('Kaylee');

      element(by.id('registerContestantsButton')).click();
      var result = element(by.id('registrationMessage'));
      expect(result.getText()).toEqual('Zoe,Kaylee');
    });
  });
});
