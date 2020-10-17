import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, Tokens } from './auth-response.model';
import { UserResponse } from '../services/user-response.model';
import { Observable } from 'rxjs';
import { JWTTokenService } from './jwt.service';

const BASE_URL = 'http://localhost:3000/api';
const AUTH_URL = `${BASE_URL}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isAuth(): boolean {
    return !this.jwtService.isTokenExpired();
  }

  constructor(private http: HttpClient, private jwtService: JWTTokenService) {}

  register(
    username: string,
    password: string,
    email: string
  ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${AUTH_URL}/register`, {
      username,
      password,
      email,
    });
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${AUTH_URL}/login`, {
      username,
      password,
    });
  }

  refreshToken(refresh: string): Observable<Tokens> {
    return this.http.post<Tokens>(`${AUTH_URL}/refresh`, { refresh });
  }

  logout(user: UserResponse): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${AUTH_URL}/logout`, { user });
  }
}
