import { CourseProjectPage } from './app.po';

describe('course-project App', () => {
  let page: CourseProjectPage;

  beforeEach(() => {
    page = new CourseProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
