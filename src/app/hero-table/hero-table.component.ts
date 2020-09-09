import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HEROES, Hero } from './heroes';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare,
} from './components/directives/sortable-header.directive';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent implements OnInit {
  heroes: Hero[] = HEROES;

  @ViewChildren(SortableHeaderDirective) headers: QueryList<
    SortableHeaderDirective
  >;

  constructor() {}

  ngOnInit(): void {}

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = SortDirection.DEFAULT;
      }
    });

    // sorting heroes
    if (direction === '' || column === '') {
      this.heroes = HEROES;
    } else {
      this.heroes = [...HEROES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === SortDirection.ASC ? res : -res;
      });
    }
  }
}
