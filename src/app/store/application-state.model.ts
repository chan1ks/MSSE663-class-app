import { AuthState } from './auth-state.model';

export interface ApplicationState {
  readonly authState: AuthState;
}
