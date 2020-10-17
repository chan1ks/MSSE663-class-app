import { createReducer, on, Action } from '@ngrx/store';
import {
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  updateAuthStatus,
} from '../actions';
import { AuthState } from '../auth-state.model';
import { AUTH_INITIAL_STATE } from '../auth-initial-state';

const reducer = createReducer(
  AUTH_INITIAL_STATE,
  on(requestLogin, requestRegistration, (state) => ({
    ...state,
    loading: true,
  })),
  on(requestLoginSuccess, requestRegistrationSuccess, (state, { token }) => ({
    ...state,
    isAuth: true,
    token,
    loading: false,
  })),
  on(requestLoginFailure, requestRegistrationFailure, (state) => ({
    ...state,
    isAuth: false,
    loading: false,
  })),
  on(updateAuthStatus, (state, { authStatus: isAuth }) => ({
    ...state,
    isAuth,
  }))
  // on(requestRefresh, (state) => ({
  //   ...state,
  //   isTokenRefreshing: true,
  // })),
  // on(requestRefreshSuccess, (state) => ({
  //   ...state,
  //   isTokenRefreshing: false,
  // }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
