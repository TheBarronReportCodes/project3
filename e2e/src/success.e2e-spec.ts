import { browser, element, by, logging } from 'protractor';

describe('Successful Scenario Tests', function() {
  it('should update players array on registration page', function() {
    browser.get('/');
    element(by.id('registrationLink')).click();
    var input1 = element(by.model(players[0]));
    input1.sendKeys('Goku');

    var input2 = element(by.model(players[1]));
    input2.sendKeys('Vegeta');

    var result = element(by.id('contestant1'));

    expect(result.getText()).toEqual("Vegeta");
  });
});
