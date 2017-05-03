import { Assignment3Page } from './app.po';

describe('assignment3 App', () => {
  let page: Assignment3Page;

  beforeEach(() => {
    page = new Assignment3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
