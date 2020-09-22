import { createReducer, on, Action } from '@ngrx/store';
import { loadHero, loadHeroFailure, loadHeroSuccess } from '../actions';
import { HERO_INITIAL_STATE } from '../hero-initial-state';
import { HeroState } from '../hero-state.model';

const reducer = createReducer(
  HERO_INITIAL_STATE,
  on(loadHero, (state) => ({ ...state, loading: true })),
  on(loadHeroSuccess, (state, { hero }) => ({
    ...state,
    hero,
    loading: false,
    loaded: true,
  })),
  on(loadHeroFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);

export function heroReducer(state: HeroState | undefined, action: Action) {
  return reducer(state, action);
}
