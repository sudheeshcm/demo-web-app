import { DemoAngularAppPage } from './app.po';

describe('demo-angular-app App', () => {
  let page: DemoAngularAppPage;

  beforeEach(() => {
    page = new DemoAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
