import { createReducer, on, Action } from '@ngrx/store';
import { UserState } from '../models/user-state.model';
import { USER_INITIAL_STATE } from '../user-initial-state';
import { loadMe, loadMeSucess, loadMeFailure } from '../actions/user.actions';

const reducer = createReducer(
  USER_INITIAL_STATE,
  on(loadMe, (state) => ({ ...state, loading: true })),
  on(loadMeSucess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(loadMeFailure, (state) => ({
    ...state,
    loading: false,
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
