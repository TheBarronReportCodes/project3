import { Helper } from './models/helper';

describe('Routing Tests', function() {
  let helper = new Helper();

  it('should navigate to welcome page and return Brackets App as text', function() {
    helper.loadHome();
    helper.idExpectToEqual('subpageTitle', 'Brackets App');
  });

  it('should navigate to registration page', function() {
    helper.loadHome();
    helper.idClick('registrationLink');
    helper.idExpectToEqual('subpageTitle', 'Register Players');
  });

  it('should navigate to brackets page', function() {
    helper.loadHome();
    helper.idClick('bracketsLink');
    helper.idExpectToEqual('subpageTitle', 'Brackets');
  });

  it('should navigate from a different page back to the welcome page', function() {
    helper.loadHome();
    helper.idClick('registrationLink');
    helper.idExpectToEqual('subpageTitle', 'Register Players');

    helper.idClick('bracketsLink');
    helper.idExpectToEqual('subpageTitle', 'Brackets');

    helper.idClick('welcomeLink');
    helper.idExpectToEqual('subpageTitle', 'Brackets App');
  });
});
