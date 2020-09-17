export interface AuthState {
  readonly isAuth: boolean;
  readonly token: string;
  readonly isTokenExpired: boolean;
  readonly loading: boolean;
}
