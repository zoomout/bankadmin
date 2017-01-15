export class BankadminPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bankadmin-app h1')).getText();
  }
}
