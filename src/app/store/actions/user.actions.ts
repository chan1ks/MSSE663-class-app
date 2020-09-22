import { createAction, props, union } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

// API Events
export const loadMe = createAction('[API - User] Load User');
export const loadMeSucess = createAction(
  '[API - User] Load User Success',
  props<{ user: User }>()
);
export const loadMeFailure = createAction(
  '[API - User] Load User Failure',
  props<{ error: any }>()
);

const all = union({
  loadMe,
  loadMeSucess,
  loadMeFailure,
});

export type UserActionTypes = typeof all;
