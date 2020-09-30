import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../models/hero.model';
import { ApplicationState } from '../../store/models/application-state.model';
import { getSelectedHero } from '../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: 'hero-details.component.html',
  styleUrls: ['hero-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailsComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit() {
    this.hero$ = this.store.select(getSelectedHero);
  }
}
