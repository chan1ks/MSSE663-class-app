import { Component, OnInit } from '@angular/core';
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
export class NavComponent implements OnInit {
  title = 'Rent a Hero';
  links: NavLinks[] = [{ title: 'Dashboard', fragment: '/' }];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}
