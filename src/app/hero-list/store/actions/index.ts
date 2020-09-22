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
export const loadHero = createAction(
  '[API Heroes] Load Hero',
  props<{ heroId: string }>()
);
export const loadHeroSuccess = createAction(
  '[API Heroes] Load Hero Success',
  props<{ hero: Hero }>()
);
export const loadHeroFailure = createAction(
  '[API Heroes] Load Hero Failure',
  props<{ error: any }>()
);
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
