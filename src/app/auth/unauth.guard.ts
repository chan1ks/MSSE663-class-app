import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthFacade } from './auth.facade';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UnauthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authFacade.isAuth$.pipe(
      tap(() => {
        // Store state may be false while jwt still valid
        if (this.authFacade.isAuth) {
          this.router.navigate(['/dashboard']);
        }
      }),
      filter((isAuth: boolean) => !isAuth),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
