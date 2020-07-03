import { browser, element, by } from 'protractor';

describe('Registration Page Errors', function() {
    it('Message should appear if registration is not of length 2, 4, or 8', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      var input1 = element(by.id('contestant0'));
      input1.sendKeys('Pikachu');
      element(by.id('registerContestantsButton')).click();

      var result = element(by.id('registrationMessage'));
      expect(result.getText()).toEqual('Should be 2, 4, or 8 contestants');
    });
});
