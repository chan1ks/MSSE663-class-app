import { createAction, props, union } from '@ngrx/store';

// API Events

// Register
export const requestRegistration = createAction(
  '[API Auth - Registration] Request Registration',
  props<{ username: string; password: string; email: string }>()
);
export const requestRegistrationSuccess = createAction(
  '[API Auth - Registration] Request Registration Success',
  props<{ token: string; refresh: string }>()
);
export const requestRegistrationFailure = createAction(
  '[API Auth - Registration] Request Registration Failure',
  props<{ error: any }>()
);

// Login
export const requestLogin = createAction(
  '[API - Login] Request Login',
  props<{ username: string; password: string }>()
);
export const requestLoginSuccess = createAction(
  '[API Auth - Login] Request Login Success',
  props<{ token: string; refresh: string }>()
);
export const requestLoginFailure = createAction(
  '[API Auth - Login] Request Login Failure',
  props<{ error: any }>()
);

// Events
export const updateAuthStatus = createAction(
  '[Auth] Update Auth Status',
  props<{ authStatus: boolean }>()
);

// Token
export const updateTokens = createAction(
  '[Auth] Update Access Token',
  props<{ token: string; refresh: string }>()
);

// export const requestRefresh = createAction('[API - Refresh] Request Refresh');
// export const requestRefreshSuccess = createAction(
//   '[API Auth - Refresh] Request Refresh Success',
//   props<{ token: string; refresh: string }>()
// );
// export const requestRefreshFailure = createAction(
//   '[API Auth - Refresh] Request Refresh Failure',
//   props<{ error: any }>()
// );

const all = union({
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  // requestRefresh,
  // requestRefreshSuccess,
  // requestRefreshFailure,
});

export type AuthActionTypes = typeof all;
