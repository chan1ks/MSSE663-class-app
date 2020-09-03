import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isAuth: boolean;

  title = 'Hero Dashboard';
  subTitle = 'Rent a Hero';

  constructor() {}

  ngOnInit(): void {}
}
