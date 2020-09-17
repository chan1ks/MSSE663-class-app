import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from './store/models/application-state.model';
import { getIsAuth } from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth$: Observable<boolean>;

  constructor(private store$: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.isAuth$ = this.store$.pipe(select(getIsAuth));
  }
}
