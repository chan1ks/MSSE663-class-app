import { ApplicationState } from './models/application-state.model';
import { AUTH_INITIAL_STATE } from './auth-initial-state';
import { USER_INITIAL_STATE } from './user-initial-state';

export const APP_INTIAL_STATE: ApplicationState = {
  authState: AUTH_INITIAL_STATE,
  userState: USER_INITIAL_STATE,
  heroesState: HEROES_INITIAL_STATE,
};
