import { LegendsOfHeroesRecipeBoxPage } from './app.po';

describe('legends-of-heroes-recipe-box App', function() {
  let page: LegendsOfHeroesRecipeBoxPage;

  beforeEach(() => {
    page = new LegendsOfHeroesRecipeBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
