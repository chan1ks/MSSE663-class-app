import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ApplicationState } from '../store/models/application-state.model';

import { HEROES_INITIAL_MOCK_STATE as initialState } from './store/heroes-initial-mock-state';
import { HeroesListComponent } from './hero-list.component';
import { getHeroes, loadHeroes } from './store';
import { of } from 'rxjs';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should display heroes', (done) => {
    spyOn(store, 'select').and.returnValue(of(initialState.heroes));
    component.ngOnInit();
    expect(store.select).toHaveBeenCalledWith(getHeroes);
    component.heroes$.subscribe((heroes) => {
      expect(heroes).toEqual(initialState.heroes);
      done();
    });
  });

  it('should load heroes', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const action = loadHeroes();
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
