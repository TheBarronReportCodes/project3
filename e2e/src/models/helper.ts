import { browser, element, by } from 'protractor';

export class Match {

  constructor() { }

  /**
  Loads the home page
  */
  loadHome() {
    browser.get('/');
  }

  /**
  clicks the button for the specified id
  */
  idClick(id: string) {
    element(by.id(id)).click();
  }

  /**
  Checks that the specified id's text is equal to the expected result
  */
  idExpectToEqual(id: string, expectation: string) {
    let actual = element(by.id(id)).getText();
    expect(actual).toEqual(expectation);
  }

  /**
  Sends a key value for the specified id
  */
  idSendKeys(id: string, key: string) {
    element(by.id(id)).sendKeys(key);
  }

  /**
  Checks the value of the id to see if it matches the expected phrase
  */
  idValueExpectToEqual(id: string, expectation: string) {
    let value = element(by.id(id)).getAttribute('value');
    expect(value).toEqual(expectation);
  }
}
