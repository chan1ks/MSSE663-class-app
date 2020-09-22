import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare,
} from './components/directives/sortable-header.directive';
import { Observable } from 'rxjs';
import { Hero } from './models/hero.model';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state.model';
import { loadHeroes, getHeroes } from '../hero-list/store';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  // @ViewChildren(SortableHeaderDirective) headers: QueryList<
  //   SortableHeaderDirective
  // >;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.heroes$ = this.store.select(getHeroes);
    this.store.dispatch(loadHeroes());
  }

  onSort({ column, direction }: SortEvent) {
    // // resetting other headers
    // this.headers.forEach((header) => {
    //   if (header.sortable !== column) {
    //     header.direction = SortDirection.DEFAULT;
    //   }
    // });
    // // sorting heroes
    // if (direction === '' || column === '') {
    //   this.heroes = HEROES;
    // } else {
    //   this.heroes = [...HEROES].sort((a, b) => {
    //     const res = compare(a[column], b[column]);
    //     return direction === SortDirection.ASC ? res : -res;
    //   });
    // }
  }
}
