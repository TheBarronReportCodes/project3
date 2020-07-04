import { Helper } from './models/helper';

describe('Bracket Page Errors', function() {
  let helper = new Helper();

  it('Message should show message that all matches must be completed', function() {
    helper.loadHome();
    helper.idClick('registrationLink');
    helper.idSendKeys('contestant0', 'Pikachu');
    helper.idSendKeys('contestant1', 'Ash');
    helper.idClick('registerContestantsButton');
    helper.idClick('bracketsLink');
    helper.idClick('completeRoundButton');
    helper.idExpectToEqual('bracketsMessage', 'Please complete all matches');
    });

  it('Message should show message that all matches must be completed test two', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillEightButton');
      helper.idClick('registerContestantsButton');
      helper.idClick('bracketsLink');

      helper.idClick('contestant1Match1');
      helper.idClick('contestant2Match2');
      helper.idClick('contestant2Match3');

      helper.idClick('completeRoundButton');
      helper.idExpectToEqual('bracketsMessage', 'Please complete all matches');
    });
    
  });
