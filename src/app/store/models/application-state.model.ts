import { AuthState } from './auth-state.model';
import { UserState } from './user-state.model';
import { HeroesState } from '../../hero-table/store/heroes-state.model';

export interface ApplicationState {
  readonly authState: AuthState;
  readonly userState: UserState;
  readonly heroesState: HeroesState;
}
