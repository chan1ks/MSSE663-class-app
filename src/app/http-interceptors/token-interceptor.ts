import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { JWTTokenService } from '../auth/jwt.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state.model';
import { updateTokens } from '../auth/store';
import { Tokens } from '../auth/auth-response.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshToken$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private store: Store<ApplicationState>,
    private authService: AuthService,
    private jwtService: JWTTokenService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = this.jwtService.token;
    if (token) {
      req = this.addToken(req, token);
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  private addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }

  private handle401Error(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      const refresh: string = this.jwtService.refresh;

      this.isRefreshing = true;
      this.refreshToken$.next(null);

      return this.authService.refreshToken(refresh).pipe(
        switchMap(({ token, refresh }: Tokens) => {
          this.isRefreshing = false;
          this.refreshToken$.next(refresh);
          this.store.dispatch(updateTokens({ token, refresh }));
          return next.handle(this.addToken(req, token));
        })
      );
    } else {
      return this.refreshToken$.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((jwt) => next.handle(this.addToken(req, jwt)))
      );
    }
  }
}
