import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('directiveExample Page App', () => {
  it('should have title', () => {
    browser.executeScript('window.localStorage.setItem("loggedIn","true");');
    browser.get('/app/directive-example');
    const title = element(by.css('h3')).getText();

    expect(title).toEqual('directive-example works!');
  });
});
