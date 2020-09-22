import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroResponse } from './hero-response.model';

const BASE_URL = 'http://localhost:3000/api';
const HEROES_URL = `${BASE_URL}/heroes`;

const header = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(token: string): Observable<HeroResponse[]> {
    return this.http.get<HeroResponse[]>(HEROES_URL, {
      headers: header(token),
    });
  }

  getHero(heroId: string, token: string): Observable<HeroResponse> {
    return this.http.get<HeroResponse>(`${HEROES_URL}/${heroId}`, {
      headers: header(token),
    });
  }

  createHero(
    name: string,
    specialty: string,
    ranking: string,
    rent: string | number,
    token: string
  ): Observable<HeroResponse> {
    return this.http.post<HeroResponse>(
      HEROES_URL,
      {
        name,
        specialty,
        ranking,
        rent,
      },
      {
        headers: header(token),
      }
    );
  }
}
