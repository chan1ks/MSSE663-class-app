import { createReducer, on, Action } from '@ngrx/store';
import { login } from '../actions/auth.actions';
import { AuthState } from '../auth-state.model';

export const initialState: AuthState = {
  isAuth: false,
};

const reducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, isAuth: true }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
