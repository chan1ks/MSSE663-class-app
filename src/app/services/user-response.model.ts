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
