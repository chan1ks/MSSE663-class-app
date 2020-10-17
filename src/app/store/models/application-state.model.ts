import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from '../../auth/store/auth-state.model';
import { UserState } from './user-state.model';
import { HeroesState } from '../../heroes/store/heroes-state.model';
import { HeroState } from '../../heroes/store/hero-state.model';
import { RouterStateUrl } from './router.models';

export interface ApplicationState {
  readonly router: RouterReducerState<RouterStateUrl>;
  readonly authState: AuthState;
  readonly userState: UserState;
  readonly heroesState: HeroesState;
  readonly selectedHero: HeroState;
}
