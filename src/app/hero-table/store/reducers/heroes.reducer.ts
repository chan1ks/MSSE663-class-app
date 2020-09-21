import { createReducer, on, Action } from '@ngrx/store';
import { loadHeroes, loadHeroesSuccess, loadHeroesFailure } from '../actions';
import { HEROES_INITIAL_STATE } from '../heroes-initial-state';
import { HeroesState } from '../heroes-state.model';

const reducer = createReducer(
  HEROES_INITIAL_STATE,
  on(loadHeroes, (state) => ({ ...state, loading: true })),
  on(loadHeroesSuccess, (state) => ({
    ...state,
    isAuth: true,
  })),
  on(loadHeroesFailure, (state) => ({
    ...state,
    isAuth: false,
    loading: false,
  }))
);

export function heroesReducer(state: HeroesState | undefined, action: Action) {
  return reducer(state, action);
}
