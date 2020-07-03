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

    it('should successfully autofill four players', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      element(by.id('autofillFourButton')).click();

      var input1 = element(by.id('contestant0'));
      var input2 = element(by.id('contestant1'));
      var input3 = element(by.id('contestant2'));
      var input4 = element(by.id('contestant3'));
      expect(input1.getAttribute('value')).toEqual('John');
      expect(input2.getAttribute('value')).toEqual('Paul');
      expect(input3.getAttribute('value')).toEqual('George');
      expect(input4.getAttribute('value')).toEqual('Ringo');

      element(by.id('registerContestantsButton')).click();
      var result = element(by.id('registrationMessage'));
      expect(result.getText()).toEqual('John,Paul,George,Ringo');
    });

    it('should successfully autofill eight players', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      element(by.id('autofillEightButton')).click();

      var input1 = element(by.id('contestant0'));
      var input2 = element(by.id('contestant1'));
      var input3 = element(by.id('contestant2'));
      var input4 = element(by.id('contestant3'));
      var input5 = element(by.id('contestant4'));
      var input6 = element(by.id('contestant5'));
      var input7 = element(by.id('contestant6'));
      var input8 = element(by.id('contestant7'));
      expect(input1.getAttribute('value')).toEqual('Leia');
      expect(input2.getAttribute('value')).toEqual('Luke');
      expect(input3.getAttribute('value')).toEqual('Lando');
      expect(input4.getAttribute('value')).toEqual('Han');
      expect(input5.getAttribute('value')).toEqual('Chewy');
      expect(input6.getAttribute('value')).toEqual('R2D2');
      expect(input7.getAttribute('value')).toEqual('C3P0');
      expect(input8.getAttribute('value')).toEqual('Vader');

      element(by.id('registerContestantsButton')).click();
      var result = element(by.id('registrationMessage'));
      expect(result.getText()).toEqual('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
    });
  });

  describe('Bracket Matches', function() {
    it('should update matches to reflect those from registration page', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      element(by.id('autofillEightButton')).click();
      element(by.id('registerContestantsButton')).click();

      element(by.id('bracketsLink')).click();
      var round = element(by.id('bracketsRound'));
      expect(round.getText()).toEqual('Round: 1');

      var contestant1Match1 = element(by.id('contestant1Match0'));
      var contestant2Match1 = element(by.id('contestant2Match0'));
      var contestant1Match2 = element(by.id('contestant1Match1'));
      var contestant2Match2 = element(by.id('contestant2Match1'));
      var contestant1Match3 = element(by.id('contestant1Match2'));
      var contestant2Match3 = element(by.id('contestant2Match2'));
      var contestant1Match4 = element(by.id('contestant1Match3'));
      var contestant2Match4 = element(by.id('contestant2Match3'));
      expect(contestant1Match1.getAttribute('value')).toEqual('Leia');
      expect(contestant2Match1.getAttribute('value')).toEqual('Luke');
      expect(contestant1Match2.getAttribute('value')).toEqual('Lando');
      expect(contestant2Match2.getAttribute('value')).toEqual('Han');
      expect(contestant1Match3.getAttribute('value')).toEqual('Chewy');
      expect(contestant2Match3.getAttribute('value')).toEqual('R2D2');
      expect(contestant1Match4.getAttribute('value')).toEqual('C3P0');
      expect(contestant2Match4.getAttribute('value')).toEqual('Vader');
    });
  });

});
