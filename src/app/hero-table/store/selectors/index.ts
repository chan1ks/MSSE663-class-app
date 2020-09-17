import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../../store/models/application-state.model';
import { HeroesState } from '../heroes-state.model';

export const heroesState = ({ heroesState }: ApplicationState) => heroesState;

export const getHeroes = createSelector(
  heroesState,
  ({ heroes }: HeroesState) => heroes
);
