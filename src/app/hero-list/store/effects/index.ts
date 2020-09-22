import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ApplicationState } from '../../../store/models/application-state.model';
import { HeroState } from '../hero-state.model';
import { HeroesService } from 'src/app/services/hero.service';
import {
  loadHero,
  loadHeroes,
  loadHeroesFailure,
  loadHeroesSuccess,
  loadHeroFailure,
  loadHeroSuccess,
} from '../actions';
import { HeroResponse } from 'src/app/services/hero-response.model';
import { routeChange } from 'src/app/store/actions/router.actions';
import { getToken } from 'src/app/store/selectors/auth.selectors';
import { load$, ofRoute } from '../../../store/router-helpers';
import {
  map,
  catchError,
  switchMap,
  withLatestFrom,
  filter,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { getSelectedHero, selectedHeroState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class HeroesEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHeroes),
      withLatestFrom(this.store.select(getToken)),
      switchMap(([action, token]) =>
        this.heroesServies.getHeroes(token).pipe(
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
      withLatestFrom(this.store.select(getToken)),
      switchMap(([action, token]) =>
        this.heroesServies.getHero(action.heroId, token).pipe(
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
      load$<HeroState>(loadHero, 'heroes/:heroId')
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private heroesServies: HeroesService
  ) {}
}
