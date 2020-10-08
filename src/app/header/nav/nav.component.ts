import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface NavLinks {
  title: string;
  fragment: string;
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
    { title: 'Dashboard', fragment: '/' },
    { title: 'Heroes', fragment: '/heroes' },
    { title: 'Login', fragment: '/login' },
  ];

  constructor(public route: ActivatedRoute) {}
}
