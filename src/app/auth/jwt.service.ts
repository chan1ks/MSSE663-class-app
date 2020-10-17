import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

type DecodedToken = { [key: string]: any };

/**
 * JWT decoder service
 * @link https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx
 */
@Injectable({ providedIn: 'root' })
export class JWTTokenService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  constructor() {}

  set token(val: string) {
    localStorage.setItem(this.JWT_TOKEN, val);
  }

  get token(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  set refresh(val: string) {
    localStorage.setItem(this.REFRESH_TOKEN, val);
  }

  get refresh(): string {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  get decoded(): DecodedToken {
    return this.token ? jwt_decode(this.token) : null;
  }

  isTokenExpired(): boolean {
    if (this.decoded) {
      return Date.now() >= this.decoded?.exp * 1000;
    }
    return true;
  }
}
