import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../../../store/models/application-state.model';
import { HeroState } from '../hero-state.model';
import { HeroesService } from '../../../services/heroes.service';
import {
  loadHero,
  loadHeroes,
  loadHeroesFailure,
  loadHeroesSuccess,
  loadHeroFailure,
  loadHeroSuccess,
} from '../actions';
import { HeroResponse } from '../../../services/hero-response.model';
import { routeChange } from '../../../store/actions/router.actions';
import { load$ } from '../../../store/router-helpers';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectedHeroState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class HeroesEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHeroes),
      switchMap(() =>
        this.heroesService.getHeroes().pipe(
          map((heroes: HeroResponse[]) => loadHeroesSuccess({ heroes })),
          catchError((error) => of(loadHeroesFailure({ error })))
        )
      )
    )
  );

  // side effect
  loadHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHero),
      switchMap(({ heroId }) =>
        this.heroesService.getHero(heroId).pipe(
          map((hero: HeroResponse) => loadHeroSuccess({ hero })),
          catchError((error) => of(loadHeroFailure({ error })))
        )
      )
    )
  );

  checkHeroRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routeChange),
      withLatestFrom(this.store.select(selectedHeroState)),
      load$<HeroState>(loadHero, ':heroId')
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private heroesService: HeroesService
  ) {}
}
