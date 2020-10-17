import { UserResponse } from '../services/user-response.model';

export interface AuthResponse {
  user: UserResponse;
  token: string;
  refresh: string;
}

export type Tokens = { token: string; refresh: string };
