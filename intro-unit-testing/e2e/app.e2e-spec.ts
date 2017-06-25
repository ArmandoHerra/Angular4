import { IntroUnitTestingPage } from './app.po';

describe('intro-unit-testing App', () => {
  let page: IntroUnitTestingPage;

  beforeEach(() => {
    page = new IntroUnitTestingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
