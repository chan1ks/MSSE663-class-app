import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from '../store/models/application-state.model';
import { Hero } from './models/hero.model';

import { loadHeroes, getHeroes, getSelectedHero } from './store';

@Injectable({ providedIn: 'root' })
export class HeroesFacade {
  readonly heroes$: Observable<Hero[]> = this.store.select(getHeroes);
  readonly selectedHero$: Observable<Hero> = this.store.select(getSelectedHero);

  constructor(private store: Store<ApplicationState>) {}

  loadHeroes(): void {
    this.store.dispatch(loadHeroes());
  }
}
