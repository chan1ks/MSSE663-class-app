import { HEROES_INITIAL_MOCK_STATE } from '../heroes-initial-mock-state';
import { HERO_INITIAL_MOCK_STATE } from '../hero-initial-mock-state';
import { getHeroes, getHeroesLoaded, getSelectedHero } from '.';

const heroesState = HEROES_INITIAL_MOCK_STATE;
const heroState = HERO_INITIAL_MOCK_STATE;

describe('Heroes selectors', () => {
  it('should retrieve heroes from HeroesState', () => {
    expect(getHeroes.projector(heroesState)).toBe(heroesState.heroes);
  });

  it('should retrieve loaded from HeroesState', () => {
    expect(getHeroesLoaded.projector(heroesState)).toBe(heroesState.loaded);
  });

  it('should retrieve selectedHero from HeroState', () => {
    expect(getSelectedHero.projector(heroState)).toBe(heroState.hero);
  });
});
