import { loadHero, loadHeroFailure, loadHeroSuccess } from '../actions';
import { HERO_INITIAL_MOCK_STATE } from '../hero-initial-mock-state';
import { HeroState } from '../hero-state.model';
import { heroReducer } from './hero.reducer';

describe('Auth Reducer', () => {
  it('should starting load heroes on `loadHero`', () => {
    const action = loadHero({ heroId: HERO_INITIAL_MOCK_STATE.hero._id });
    const expected: HeroState = {
      ...HERO_INITIAL_MOCK_STATE,
      loading: true,
    };
    const actual = heroReducer(HERO_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get heroes successfully on `loadHeroSuccess`', () => {
    const action = loadHeroSuccess({
      hero: HERO_INITIAL_MOCK_STATE.hero,
    });
    const expected: HeroState = {
      ...HERO_INITIAL_MOCK_STATE,
      loading: false,
      loaded: true,
    };
    const actual = heroReducer(HERO_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to true on `login`', () => {
    const action = loadHeroFailure({ error: 'I tried...' });
    const expected: HeroState = {
      ...HERO_INITIAL_MOCK_STATE,
      loading: false,
      loaded: false,
    };
    const actual = heroReducer(HERO_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
