import { HeroResponse } from 'src/app/services/hero-response.model';

export interface Hero extends HeroResponse {}

export enum Rank {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
}
