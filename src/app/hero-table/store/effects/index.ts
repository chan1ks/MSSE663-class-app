import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../store/models/application-state.model';
import { of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { HeroesService } from 'src/app/services/hero.service';
import { loadHeroes, loadHeroesFailure, loadHeroesSuccess } from '../actions';
import { getToken } from 'src/app/store';
import { HeroResponse } from 'src/app/services/hero-response.model';

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

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private heroesServies: HeroesService
  ) {}
}
