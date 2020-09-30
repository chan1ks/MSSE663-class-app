import { Hero } from '../models/hero.model';
import { HeroState } from './hero-state.model';

export interface HeroesState {
  readonly heroes: Hero[];
  readonly loading?: boolean;
  readonly loaded?: boolean;
}
