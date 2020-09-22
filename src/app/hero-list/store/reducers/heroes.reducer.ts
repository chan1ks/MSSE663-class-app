import { createReducer, on, Action } from '@ngrx/store';
import { loadHeroes, loadHeroesSuccess, loadHeroesFailure } from '../actions';
import { HEROES_INITIAL_STATE } from '../heroes-initial-state';
import { HeroesState } from '../heroes-state.model';

const reducer = createReducer(
  HEROES_INITIAL_STATE,
  on(loadHeroes, (state) => ({ ...state, loading: true })),
  on(loadHeroesSuccess, (state, { heroes }) => ({
    ...state,
    heroes,
    loading: false,
    loaded: true,
  })),
  on(loadHeroesFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);

export function heroesReducer(state: HeroesState | undefined, action: Action) {
  return reducer(state, action);
}
