import { AuthState } from './models/auth-state.model';

export const AUTH_INITIAL_MOCK_STATE: AuthState = {
  isAuth: false,
  token: 'token',
  isTokenExpired: false,
  loading: false,
};
