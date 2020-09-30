export interface AuthState {
  readonly isAuth: boolean;
  readonly isTokenExpired: boolean;
  readonly loading: boolean;
}
