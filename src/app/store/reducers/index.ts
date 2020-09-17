import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';

export const appState: ActionReducerMap<ApplicationState> = {
  authState: authReducer,
  userState: userReducer,
  heroesState: null,
};
