import { browser, element, by } from 'protractor';

describe('Bracket Page Errors', function() {
  it('Message should show message that all matches must be completed', function() {
    browser.get('/');
    element(by.id('registrationLink')).click();
    var input1 = element(by.id('contestant0'));
    input1.sendKeys('Pikachu');
    var input2 = element(by.id('contestant1'));
    input2.sendKeys('Ash');
    element(by.id('registerContestantsButton')).click();
    element(by.id('bracketsLink')).click();
    element(by.id('completeRoundButton')).click();

    var result = element(by.id('bracketsMessage'));
    expect(result.getText()).toEqual('Please complete all matches');
    });

    it('Message should show message that all matches must be completed test two', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();
      element(by.id('autofillEightButton')).click();
      element(by.id('registerContestantsButton')).click();
      element(by.id('bracketsLink')).click();

      var contestant1Match1Round1 = element(by.id('contestant1Match1'));
      var contestant2Match1Round1 = element(by.id('contestant2Match1'));
      var contestant1Match2Round1 = element(by.id('contestant1Match2'));
      var contestant2Match2Round1 = element(by.id('contestant2Match2'));
      var contestant1Match3Round1 = element(by.id('contestant1Match3'));
      var contestant2Match3Round1 = element(by.id('contestant2Match3'));
      var contestant1Match4Round1 = element(by.id('contestant1Match4'));
      var contestant2Match4Round1 = element(by.id('contestant2Match4'));

      contestant1Match1Round1.click();
      contestant2Match2Round1.click();
      contestant2Match3Round1.click();

      element(by.id('completeRoundButton')).click();

      var result = element(by.id('bracketsMessage'));
      expect(result.getText()).toEqual('Please complete all matches');
      });
  });
