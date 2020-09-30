import { Hero } from '../models/hero.model';

export interface HeroState {
  readonly hero: Hero;
  readonly loading: boolean;
  readonly loaded: boolean;
}
