import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from '../store/facades/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>;

  constructor(private userFacade: UserFacade) {}

  ngOnInit() {
    this.isAuth$ = this.userFacade.isAuth$;
  }
}
