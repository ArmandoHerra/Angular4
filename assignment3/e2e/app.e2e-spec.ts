import { Assignment3Page } from './app.po';

describe('assignment3 App', () => {
  let page: Assignment3Page;

  beforeEach(() => {
    page = new Assignment3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
