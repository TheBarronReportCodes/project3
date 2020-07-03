import { browser, element, by } from 'protractor';

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
    it('should show the full completion of a tournament with 8 players', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();

      element(by.id('autofillEightButton')).click();
      element(by.id('registerContestantsButton')).click();

      element(by.id('bracketsLink')).click();

      var round1 = element(by.id('bracketsRound'));
      expect(round1.getText()).toEqual('Round: 1');
      var contestant1Match1Round1 = element(by.id('contestant1Match1'));
      var contestant2Match1Round1 = element(by.id('contestant2Match1'));
      var contestant1Match2Round1 = element(by.id('contestant1Match2'));
      var contestant2Match2Round1 = element(by.id('contestant2Match2'));
      var contestant1Match3Round1 = element(by.id('contestant1Match3'));
      var contestant2Match3Round1 = element(by.id('contestant2Match3'));
      var contestant1Match4Round1 = element(by.id('contestant1Match4'));
      var contestant2Match4Round1 = element(by.id('contestant2Match4'));
      expect(contestant1Match1Round1.getAttribute('value')).toEqual('Leia');
      expect(contestant2Match1Round1.getAttribute('value')).toEqual('Luke');
      expect(contestant1Match2Round1.getAttribute('value')).toEqual('Lando');
      expect(contestant2Match2Round1.getAttribute('value')).toEqual('Han');
      expect(contestant1Match3Round1.getAttribute('value')).toEqual('Chewy');
      expect(contestant2Match3Round1.getAttribute('value')).toEqual('R2D2');
      expect(contestant1Match4Round1.getAttribute('value')).toEqual('C3P0');
      expect(contestant2Match4Round1.getAttribute('value')).toEqual('Vader');

      contestant1Match1Round1.click();
      contestant2Match2Round1.click();
      contestant2Match3Round1.click();
      contestant2Match4Round1.click();
      element(by.id('completeRoundButton')).click();

      var round2 = element(by.id('bracketsRound'));
      expect(round2.getText()).toEqual('Round: 2');
      var contestant1Match1Round2 = element(by.id('contestant1Match1'));
      var contestant2Match1Round2 = element(by.id('contestant2Match1'));
      var contestant1Match2Round2 = element(by.id('contestant1Match2'));
      var contestant2Match2Round2 = element(by.id('contestant2Match2'));
      expect(contestant1Match1Round2.getAttribute('value')).toEqual('Leia');
      expect(contestant2Match1Round2.getAttribute('value')).toEqual('Han');
      expect(contestant1Match2Round2.getAttribute('value')).toEqual('R2D2');
      expect(contestant2Match2Round2.getAttribute('value')).toEqual('Vader');

      contestant1Match1Round2.click();
      contestant1Match2Round2.click();
      element(by.id('completeRoundButton')).click();

      var round3 = element(by.id('bracketsRound'));
      expect(round3.getText()).toEqual('Round: 3');
      var contestant1Match1Round3 = element(by.id('contestant1Match1'));
      var contestant2Match1Round3 = element(by.id('contestant2Match1'));
      expect(contestant1Match1Round3.getAttribute('value')).toEqual('Leia');
      expect(contestant2Match1Round3.getAttribute('value')).toEqual('R2D2');

      contestant2Match1Round3.click();
      element(by.id('completeRoundButton')).click();

      var round3 = element(by.id('bracketsRound'));
      expect(round3.getText()).toEqual('Round: 3');
      var winner = element(by.id('tournamentWinner'));
      expect(winner.getText()).toEqual('Winner: R2D2');
    });

    it('should show the full completion of a tournament with 4 players', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();
      element(by.id('autofillFourButton')).click();
      element(by.id('registerContestantsButton')).click();
      element(by.id('bracketsLink')).click();

      var round1 = element(by.id('bracketsRound'));
      expect(round1.getText()).toEqual('Round: 1');
      var contestant1Match1Round1 = element(by.id('contestant1Match1'));
      var contestant2Match1Round1 = element(by.id('contestant2Match1'));
      var contestant1Match2Round1 = element(by.id('contestant1Match2'));
      var contestant2Match2Round1 = element(by.id('contestant2Match2'));
      expect(contestant1Match1Round1.getAttribute('value')).toEqual('John');
      expect(contestant2Match1Round1.getAttribute('value')).toEqual('Paul');
      expect(contestant1Match2Round1.getAttribute('value')).toEqual('George');
      expect(contestant2Match2Round1.getAttribute('value')).toEqual('Ringo');

      contestant1Match1Round1.click();
      contestant1Match2Round1.click();
      element(by.id('completeRoundButton')).click();

      var round2 = element(by.id('bracketsRound'));
      expect(round2.getText()).toEqual('Round: 2');
      var contestant1Match1Round2 = element(by.id('contestant1Match1'));
      var contestant2Match1Round2 = element(by.id('contestant2Match1'));
      expect(contestant1Match1Round2.getAttribute('value')).toEqual('John');
      expect(contestant2Match1Round2.getAttribute('value')).toEqual('George');

      contestant1Match1Round2.click();
      element(by.id('completeRoundButton')).click();

      var round2 = element(by.id('bracketsRound'));
      expect(round2.getText()).toEqual('Round: 2');
      var winner = element(by.id('tournamentWinner'));
      expect(winner.getText()).toEqual('Winner: John');
    });

    it('should show the full completion of a tournament with 2 players', function() {
      browser.get('/');
      element(by.id('registrationLink')).click();
      element(by.id('autofillTwoButton')).click();
      element(by.id('registerContestantsButton')).click();
      element(by.id('bracketsLink')).click();

      var round1 = element(by.id('bracketsRound'));
      expect(round1.getText()).toEqual('Round: 1');
      var contestant1Match1Round1 = element(by.id('contestant1Match1'));
      var contestant2Match1Round1 = element(by.id('contestant2Match1'));
      expect(contestant1Match1Round1.getAttribute('value')).toEqual('Zoe');
      expect(contestant2Match1Round1.getAttribute('value')).toEqual('Kaylee');

      contestant2Match1Round1.click();
      element(by.id('completeRoundButton')).click();

      var round1 = element(by.id('bracketsRound'));
      expect(round1.getText()).toEqual('Round: 1');
      var winner = element(by.id('tournamentWinner'));
      expect(winner.getText()).toEqual('Winner: Kaylee');
    });
  });

});
