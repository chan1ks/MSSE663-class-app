import { createAction, props, union } from '@ngrx/store';
import { Hero } from '../../models/hero.model';

// Click Events
export const addHero = createAction('[Heroes] Add Hero');

// API Events
export const loadHeroes = createAction('[API Heroes] Load Heroes');
export const loadHeroesSuccess = createAction(
  '[API Heroes] Load Heroes Success',
  props<{ heroes: Hero[] }>()
);
export const loadHeroesFailure = createAction(
  '[API Heroes] Load Heroes Failure',
  props<{ error: any }>()
);
export const loadHero = createAction('[API Heroes] Load Hero');
export const loadHeroSuccess = createAction('[API Heroes] Load Hero Success');
export const loadHeroFailure = createAction('[API Heroes] Load Hero Failure');
export const createNewHero = createAction('[API Heroes] Create Hero');
export const createNewHeroSuccess = createAction(
  '[API Heroes] Create Hero Success'
);
export const createNewHeroFailure = createAction(
  '[API Heroes] Create Hero Failure'
);

const all = union({
  loadHeroes,
  loadHeroesSuccess,
  loadHeroesFailure,
  loadHero,
  loadHeroSuccess,
  loadHeroFailure,
});

export type HeroActionTypes = typeof all;
