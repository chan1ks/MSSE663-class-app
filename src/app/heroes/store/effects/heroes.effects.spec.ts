import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { HeroResponse } from 'src/app/services/hero-response.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import {
  loadHero,
  loadHeroes,
  loadHeroesFailure,
  loadHeroesSuccess,
  loadHeroFailure,
  loadHeroSuccess,
} from '../actions';
import { MOCK_HERO } from '../hero-initial-mock-state';
import { HeroesEffects } from './heroes.effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

const mockHeroesService = {
  getHeroes: () => of([MOCK_HERO]),
  getHero: () => of(MOCK_HERO),
  // createHero: () => {}
};

const mockHeroesResponse: HeroResponse[] = [MOCK_HERO];

describe('HeroesEffects', () => {
  let actions$: Observable<any>;
  let heroesService: HeroesService;
  let effects: HeroesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroesEffects,
        provideMockActions(() => actions$),
        { provide: Store, useValue: MOCK_STORE$ },
        { provide: HeroesService, useValue: mockHeroesService },
      ],
    });
    effects = TestBed.inject(HeroesEffects);
    heroesService = TestBed.inject(HeroesService);
  });

  describe('loadHeroes$', () => {
    it('should successfully load heroes', () => {
      spyOn(heroesService, 'getHeroes').and.returnValue(of(mockHeroesResponse));
      actions$ = hot('a', {
        a: loadHeroes(),
      });

      const expected$ = cold('b', {
        b: loadHeroesSuccess({ heroes: [MOCK_HERO] }),
      });

      expect(effects.loadHeroes$).toBeObservable(expected$);
    });

    it('should fail to load heroes', () => {
      const errMsg = 'I tried...';
      const error$ = cold('#', {}, errMsg);

      spyOn(heroesService, 'getHeroes').and.returnValue(error$);
      actions$ = hot('a', {
        a: loadHeroes(),
      });

      const expected$ = cold('b', {
        b: loadHeroesFailure({ error: errMsg }),
      });

      expect(effects.loadHeroes$).toBeObservable(expected$);
    });
  });

  describe('loadHero$', () => {
    it('should successfully load a hero', () => {
      spyOn(heroesService, 'getHero').and.returnValue(
        of(mockHeroesResponse[0])
      );
      actions$ = hot('a', {
        a: loadHero({ heroId: 'heroId' }),
      });

      const expected$ = cold('b', {
        b: loadHeroSuccess({ hero: MOCK_HERO }),
      });
      expect(effects.loadHero$).toBeObservable(expected$);
    });

    it('should fail to load a hero', () => {
      const errMsg = 'I tried...';
      const error$ = cold('#', {}, errMsg);

      spyOn(heroesService, 'getHero').and.returnValue(error$);
      actions$ = hot('a', {
        a: loadHero({ heroId: 'heroId' }),
      });

      const expected$ = cold('b', {
        b: loadHeroFailure({ error: errMsg }),
      });

      expect(effects.loadHero$).toBeObservable(expected$);
    });
  });
});
