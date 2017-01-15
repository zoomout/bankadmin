import { BankadminPage } from './app.po';

describe('bankadmin App', function() {
  let page: BankadminPage;

  beforeEach(() => {
    page = new BankadminPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bankadmin works!');
  });
});
