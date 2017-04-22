import { Angular4testPage } from './app.po';

describe('angular4test App', () => {
  let page: Angular4testPage;

  beforeEach(() => {
    page = new Angular4testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
