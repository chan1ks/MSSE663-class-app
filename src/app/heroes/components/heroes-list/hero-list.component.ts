import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroesListComponent implements OnInit, AfterViewInit {
  @Input() heroes: Hero[];

  columnsToDisplay: string[] = ['ranking', 'name', 'specialty', 'rent'];
  dataSource: MatTableDataSource<Hero>;

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Hero>(this.heroes);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
