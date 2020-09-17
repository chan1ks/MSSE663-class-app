export interface AuthResponse {
  user: UserResponse;
  token: string;
}

export interface UserResponse {
  _id: string;
  username: string;
  password: string;
  tokens: Token[];
}

interface Token {
  _id: string;
  token: string;
}
