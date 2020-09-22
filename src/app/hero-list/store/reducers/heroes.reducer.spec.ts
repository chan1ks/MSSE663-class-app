import { loadHeroes, loadHeroesFailure, loadHeroesSuccess } from '../actions';
import { HEROES_INITIAL_MOCK_STATE } from '../heroes-initial-mock-state';
import { HeroesState } from '../heroes-state.model';
import { heroesReducer } from './heroes.reducer';

describe('Auth Reducer', () => {
  it('should start loading heroes on `loadHeroes`', () => {
    const action = loadHeroes();
    const expected: HeroesState = {
      ...HEROES_INITIAL_MOCK_STATE,
      loading: true,
    };
    const actual = heroesReducer(HEROES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should get heroes successfully on `loadHeroesSuccess`', () => {
    const action = loadHeroesSuccess({
      heroes: HEROES_INITIAL_MOCK_STATE.heroes,
    });
    const expected: HeroesState = {
      ...HEROES_INITIAL_MOCK_STATE,
      loading: false,
      loaded: true,
    };
    const actual = heroesReducer(HEROES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to true on `login`', () => {
    const action = loadHeroesFailure({ error: 'I tried...' });
    const expected: HeroesState = {
      ...HEROES_INITIAL_MOCK_STATE,
      loading: false,
      loaded: false,
    };
    const actual = heroesReducer(HEROES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
