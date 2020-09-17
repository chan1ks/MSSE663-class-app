import { UserResponse } from '../services/user-response.model';

export interface User extends UserResponse {
  email: string;
}
