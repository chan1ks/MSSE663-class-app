import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ApplicationState } from 'src/app/store/models/application-state.model';
import { HERO_INITIAL_MOCK_STATE as initialState } from '../store/hero-initial-mock-state';
import { HeroDetailsComponent } from './hero-details.component';
import { getSelectedHero } from '../store';
import { of } from 'rxjs';

describe('HeroDetailsComponent', () => {
  let component: HeroDetailsComponent;
  let fixture: ComponentFixture<HeroDetailsComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should display a selected hero', (done) => {
    spyOn(store, 'select').and.returnValue(of(initialState.hero));
    component.ngOnInit();
    expect(store.select).toHaveBeenCalledWith(getSelectedHero);
    component.hero$.subscribe((hero) => {
      expect(hero).toEqual(initialState.hero);
      done();
    });
  });
});
