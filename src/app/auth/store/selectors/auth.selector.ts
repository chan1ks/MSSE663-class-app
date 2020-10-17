import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../../store/models/application-state.model';
import { AuthState } from '../auth-state.model';

export const authState = ({ authState }: ApplicationState) => authState;

export const getIsAuth = createSelector(
  authState,
  ({ isAuth }: AuthState) => isAuth
);
