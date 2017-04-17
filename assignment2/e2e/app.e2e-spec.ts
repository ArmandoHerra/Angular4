import { Assignment2Page } from './app.po';

describe('assignment2 App', () => {
  let page: Assignment2Page;

  beforeEach(() => {
    page = new Assignment2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
