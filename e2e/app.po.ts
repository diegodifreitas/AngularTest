import { browser, by, element } from 'protractor';

export class AngularTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('myApp-root h1')).getText();
  }
}
