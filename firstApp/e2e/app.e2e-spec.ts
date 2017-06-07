import { FirstAppPage } from './app.po';

describe('first-app App', () => {
  let page: FirstAppPage;

  beforeEach(() => {
    page = new FirstAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
