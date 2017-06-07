import { WhatIDoPage } from './app.po';

describe('what-i-do App', () => {
  let page: WhatIDoPage;

  beforeEach(() => {
    page = new WhatIDoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
