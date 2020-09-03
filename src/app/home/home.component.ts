import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuth: boolean;

  budget = '7000000000';

  heroes = [
    {
      name: 'Captain Marvel',
      rent: '2000000000',
    },
    {
      name: 'Spiderman',
      rent: 100000,
    },
    {
      name: 'Black Panther',
      rent: '100000000',
    },
    {
      name: 'Thor',
      rent: 2000000000,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.isAuth = true;
  }
}
