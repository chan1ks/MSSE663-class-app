import { Component, Input, OnInit } from '@angular/core';

interface NavLinks {
  title: string;
  path: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() isAuth: boolean;

  title = 'Rent a Hero';
  links: NavLinks[] = [
    { title: 'Dashboard', path: '/' },
    { title: 'Heroes', path: '/heroes' },
  ];

  constructor() {}

  logout(): void {}
}
