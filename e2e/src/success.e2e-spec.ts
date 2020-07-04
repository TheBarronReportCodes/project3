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

      helper.idExpectToEqual('bracketsRound', 'Round: 3');
      helper.idExpectToEqual('tournamentWinner', 'Winner: R2D2');
    });

    it('should show the full completion of a tournament with 4 players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillFourButton');
      helper.idClick('registerContestantsButton');
      helper.idClick('bracketsLink');
      helper.idExpectToEqual('bracketsRound', 'Round: 1');
      helper.idValueExpectToEqual('contestant1Match1', 'John');
      helper.idValueExpectToEqual('contestant2Match1', 'Paul');
      helper.idValueExpectToEqual('contestant1Match2', 'George');
      helper.idValueExpectToEqual('contestant2Match2', 'Ringo');
      helper.idClick('contestant1Match1');
      helper.idClick('contestant1Match2');
      helper.idClick('completeRoundButton');

      helper.idExpectToEqual('bracketsRound', 'Round: 2');
      helper.idValueExpectToEqual('contestant1Match1', 'John');
      helper.idValueExpectToEqual('contestant2Match1', 'George');
      helper.idClick('contestant1Match1');
      helper.idClick('completeRoundButton');

      helper.idExpectToEqual('bracketsRound', 'Round: 2');
      helper.idExpectToEqual('tournamentWinner', 'Winner: John');
    });

    it('should show the full completion of a tournament with 2 players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillTwoButton');
      helper.idClick('registerContestantsButton');
      helper.idClick('bracketsLink');
      helper.idExpectToEqual('bracketsRound', 'Round: 1');
      helper.idValueExpectToEqual('contestant1Match1', 'Zoe');
      helper.idValueExpectToEqual('contestant2Match1', 'Kaylee');
      helper.idClick('contestant2Match1');
      helper.idClick('completeRoundButton');

      helper.idExpectToEqual('bracketsRound', 'Round: 1');
      helper.idExpectToEqual('tournamentWinner', 'Winner: Kaylee');
    });
  });

});
