import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './user-response.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const GET_ME_URL = `${BASE_URL}/user`;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getMe(): Observable<UserResponse> {
    return this.http.get<UserResponse>(GET_ME_URL);
  }
}
