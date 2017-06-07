import { MovieHubPage } from './app.po';

describe('movie-hub App', () => {
  let page: MovieHubPage;

  beforeEach(() => {
    page = new MovieHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
