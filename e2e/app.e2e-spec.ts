import { RotasAngular2Page } from './app.po';

describe('rotas-angular2 App', () => {
  let page: RotasAngular2Page;

  beforeEach(() => {
    page = new RotasAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
