import { createSelector } from '@ngrx/store';
import { Params } from '@angular/router';
import { ApplicationState } from '../../../store/models/application-state.model';
import { HeroesState } from '../heroes-state.model';
import { HeroState } from '../hero-state.model';
import { getRouteParams } from 'src/app/store/selectors/router.selectors';

export const heroesState = ({ heroesState }: ApplicationState) => heroesState;
export const selectedHeroState = ({ selectedHero }: ApplicationState) =>
  selectedHero;

export const getHeroes = createSelector(
  heroesState,
  (state: HeroesState) => state?.heroes
);

export const getHeroesLoaded = createSelector(
  heroesState,
  (state: HeroesState) => state?.loaded
);

export const getSelectedHero = createSelector(
  selectedHeroState,
  (state: HeroState) => state?.hero
);

export const getSelectedHeroId = createSelector(
  getRouteParams,
  (params: Params) => params['heroId']
);
