import { browser, element, by } from 'protractor';
import { Helper } from './models/helper';

describe('Successful Scenario Tests', function() {
    let helper = new Helper();
  describe('Input values and registerContestants()', function() {
    it('should update players array on registration page', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Goku');
      helper.idSendKeys('contestant1', 'Vegeta');
      helper.idValueExpectToEqual('contestant0', 'Goku');
      helper.idValueExpectToEqual('contestant1', 'Vegeta');
    });

    it('should register contestants successfully', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Goku');
      helper.idSendKeys('contestant1', 'Vegeta');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Goku,Vegeta');
    });

  });

  describe('Autofill Tests', function() {
    it('should successfully autofill two players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillTwoButton');
      helper.idValueExpectToEqual('contestant0', 'Zoe');
      helper.idValueExpectToEqual('contestant1', 'Kaylee');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Zoe,Kaylee');
    });

    it('should successfully autofill four players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillFourButton');
      helper.idValueExpectToEqual('contestant0', 'John');
      helper.idValueExpectToEqual('contestant1', 'Paul');
      helper.idValueExpectToEqual('contestant2', 'George');
      helper.idValueExpectToEqual('contestant3', 'Ringo');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'John,Paul,George,Ringo');
    });

    it('should successfully autofill eight players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillEightButton');
      helper.idValueExpectToEqual('contestant0', 'Leia');
      helper.idValueExpectToEqual('contestant1', 'Luke');
      helper.idValueExpectToEqual('contestant2', 'Lando');
      helper.idValueExpectToEqual('contestant3', 'Han');
      helper.idValueExpectToEqual('contestant4', 'Chewy');
      helper.idValueExpectToEqual('contestant5', 'R2D2');
      helper.idValueExpectToEqual('contestant6', 'C3P0');
      helper.idValueExpectToEqual('contestant7', 'Vader');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
    });
  });

  describe('Bracket Matches', function() {
    it('should show the full completion of a tournament with 8 players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillEightButton');
      helper.idClick('registerContestantsButton');
      helper.idClick('bracketsLink');
      helper.idExpectToEqual('bracketsRound', 'Round: 1');
      helper.idValueExpectToEqual('contestant1Match1', 'Leia');
      helper.idValueExpectToEqual('contestant2Match1', 'Luke');
      helper.idValueExpectToEqual('contestant1Match2', 'Lando');
      helper.idValueExpectToEqual('contestant2Match2', 'Han');
      helper.idValueExpectToEqual('contestant1Match3', 'Chewy');
      helper.idValueExpectToEqual('contestant2Match3', 'R2D2');
      helper.idValueExpectToEqual('contestant1Match4', 'C3P0');
      helper.idValueExpectToEqual('contestant2Match4', 'Vader');
      helper.idClick('contestant1Match1');
      helper.idClick('contestant2Match2');
      helper.idClick('contestant2Match3');
      helper.idClick('contestant2Match4');
      helper.idClick('completeRoundButton');

      helper.idExpectToEqual('bracketsRound', 'Round: 2');
      helper.idValueExpectToEqual('contestant1Match1', 'Leia');
      helper.idValueExpectToEqual('contestant2Match1', 'Han');
      helper.idValueExpectToEqual('contestant1Match2', 'R2D2');
      helper.idValueExpectToEqual('contestant2Match2', 'Vader');
      helper.idClick('contestant1Match1');
      helper.idClick('contestant1Match2');
      helper.idClick('completeRoundButton');

      helper.idExpectToEqual('bracketsRound', 'Round: 3');
      helper.idValueExpectToEqual('contestant1Match1', 'Leia');
      helper.idValueExpectToEqual('contestant2Match1', 'R2D2');
      helper.idClick('contestant2Match1');
      helper.idClick('completeRoundButton');
      contestant2Match1Round3.click();

      helper.idExpectToEqual('bracketsRound', 'Round: 3');
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
