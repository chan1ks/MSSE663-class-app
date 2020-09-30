import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input,
} from '@angular/core';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare,
} from '../directives/sortable-header.directive';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  @Input() heroes: Hero[];

  // @ViewChildren(SortableHeaderDirective) headers: QueryList<
  //   SortableHeaderDirective
  // >;

  constructor() {}

  ngOnInit(): void {}

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
