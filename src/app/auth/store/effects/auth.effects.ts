import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import {
  requestLogin,
  requestLoginFailure,
  requestLoginSuccess,
  requestRegistration,
  requestRegistrationFailure,
  requestRegistrationSuccess,
  updateAuthStatus,
  updateTokens,
} from '../actions';
import { AuthService } from '../../auth.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthResponse } from '../../auth-response.model';
import { JWTTokenService } from '../../jwt.service';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(({ token, refresh }: AuthResponse) =>
            requestLoginSuccess({ token, refresh })
          ),
          catchError((error) => {
            localStorage.clear();
            return of(requestLoginFailure({ error }));
          })
        )
      )
    )
  );

  // side effect
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestLoginSuccess, requestRegistrationSuccess),
        tap(({ token, refresh }) => {
          this.jwtService.token = token;
          this.jwtService.refresh = refresh;
          this.router.navigateByUrl('/dashboard');
        })
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestRegistration),
      switchMap(({ username, password, email }) =>
        this.authService.register(username, password, email).pipe(
          map(({ token, refresh }: AuthResponse) =>
            requestRegistrationSuccess({ token, refresh })
          ),
          catchError((error) => of(requestRegistrationFailure({ error })))
        )
      )
    )
  );

  updateTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTokens),
      map(({ token, refresh }) => {
        this.jwtService.token = token;
        this.jwtService.refresh = refresh;
        return updateAuthStatus({ authStatus: true });
      })
    )
  );

  // refreshToken$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(requestRefresh),
  //     switchMap(() => {
  //       const refresh: string = this.jwtService.refresh;
  //       return this.authService.refreshToken(refresh).pipe(
  //         map(({ token, refresh }: Tokens) => {
  //           this.jwtService.token = token;
  //           this.jwtService.refresh = refresh;
  //           return requestRefreshSuccess({ token, refresh });
  //         }),
  //         catchError((error) => {
  //           localStorage.clear();
  //           this.router.navigateByUrl('/');
  //           return of(requestRefreshFailure({ error }));
  //         })
  //       );
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private jwtService: JWTTokenService,
    private router: Router
  ) {}
}
