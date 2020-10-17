import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsAuth } from './store/selectors/auth.selector';
import { ApplicationState } from '../store/models/application-state.model';
import { updateAuthStatus } from './store/actions';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  readonly isAuth$: Observable<boolean> = this.store.select(getIsAuth);

  constructor(
    private store: Store<ApplicationState>,
    private authService: AuthService
  ) {}

  get isAuth(): boolean {
    return this.authService.isAuth;
  }

  updateAuthStatus(authStatus: boolean): void {
    this.store.dispatch(updateAuthStatus({ authStatus }));
  }
}
