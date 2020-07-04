import { Helper } from './models/helper';

describe('Registration Page Errors', function() {
  let helper = new Helper();
    it('Message should appear if registration is not of length 2, 4, or 8', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Pikachu');

      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Should be 2, 4, or 8 contestants');
    });

    it('Message should appear when input is duplicate', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Pikachu');
      helper.idSendKeys('contestant1', 'Pikachu');

      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Duplicate player');
    });
});
