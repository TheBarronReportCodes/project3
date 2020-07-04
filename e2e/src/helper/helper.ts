export class Helper {
  loadHome() {
    browser.get('/');
  }

  idClick(id: string) {
    element(by.id(id)).click();
  }

  idExpectToEqual(id: string, expectation: string){
    var actual = element(by.id(id)).getText();
    expect(actual).toEqual(expectation);
  }
}
