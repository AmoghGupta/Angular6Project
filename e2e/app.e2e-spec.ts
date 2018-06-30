import { MyCartProjectPage } from './app.po';

describe('my-cart-project App', () => {
  let page: MyCartProjectPage;

  beforeEach(() => {
    page = new MyCartProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
