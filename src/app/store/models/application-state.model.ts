import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from './auth-state.model';
import { UserState } from './user-state.model';
import { HeroesState } from '../../hero-list/store/heroes-state.model';
import { HeroState } from '../../hero-list/store/hero-state.model';
import { RouterStateUrl } from './router.models';

export interface ApplicationState {
  readonly router: RouterReducerState<RouterStateUrl>;
  readonly authState: AuthState;
  readonly userState: UserState;
  readonly heroesState: HeroesState;
  readonly selectedHero: HeroState;
}
