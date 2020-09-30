import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './models/hero.model';
import { HeroesFacade } from './heroes.facade';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroesFacade: HeroesFacade) {}

  ngOnInit(): void {
    this.heroes$ = this.heroesFacade.heroes$;
    this.heroesFacade.loadHeroes();
  }
}
