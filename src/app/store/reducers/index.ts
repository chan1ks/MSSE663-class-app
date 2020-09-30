import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { heroesReducer, heroReducer } from '../../heroes/store/reducers';

export const appState: ActionReducerMap<ApplicationState> = {
  router: routerReducer,
  authState: authReducer,
  userState: userReducer,
  heroesState: heroesReducer,
  selectedHero: heroReducer,
};
