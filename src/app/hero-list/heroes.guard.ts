import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../store/models/application-state.model';
import { loadHeroes, getHeroesLoaded } from './store';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeroesGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getHeroesLoaded).pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(loadHeroes());
        }
      }),
      filter((loaded: boolean) => loaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
