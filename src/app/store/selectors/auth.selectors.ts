import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { AuthState } from '../models/auth-state.model';

export const authState = ({ authState }: ApplicationState) => authState;

export const getIsAuth = createSelector(
  authState,
  ({ isAuth }: AuthState) => isAuth
);

export const getToken = createSelector(
  authState,
  ({ token }: AuthState) => token
);
