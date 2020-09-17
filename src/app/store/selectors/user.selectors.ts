import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { UserState } from '../models/user-state.model';

export const userState = ({ userState }: ApplicationState) => userState;

export const getMe = createSelector(userState, ({ user }: UserState) => user);
