import { createReducer, on, Action } from '@ngrx/store';
import {
  requestLogin,
  requestLoginFailure,
  requestLoginSuccess,
  requestRegistration,
  requestRegistrationFailure,
  requestRegistrationSuccess,
} from '../actions/auth.actions';
import { AuthState } from '../models/auth-state.model';
import { AUTH_INITIAL_STATE } from '../auth-initial-state';

const reducer = createReducer(
  AUTH_INITIAL_STATE,
  on(requestRegistration, (state) => ({ ...state, loading: true })),
  on(requestRegistrationSuccess, (state) => ({
    ...state,
    isAuth: true,
  })),
  on(requestRegistrationFailure, (state) => ({
    ...state,
    isAuth: false,
    loading: false,
  })),
  on(requestLogin, (state) => ({ ...state, loading: true })),
  on(requestLoginSuccess, (state) => ({
    ...state,
    isAuth: true,
    loading: false,
  })),
  on(requestLoginFailure, (state) => ({
    ...state,
    isAuth: false,
    loading: false,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
