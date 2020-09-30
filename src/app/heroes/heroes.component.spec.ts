import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HEROES_INITIAL_MOCK_STATE as initialState } from './store/heroes-initial-mock-state';
import { MOCK_HERO } from './store/hero-initial-mock-state';

import { HeroesComponent } from './heroes.component';
import { HeroesFacade } from './heroes.facade';

const MockHeroesFacade = {
  heroes$: of([MOCK_HERO]),
  loadHeroes: () => null,
};

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [{ provide: HeroesFacade, useValue: MockHeroesFacade }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display heroes', (done) => {
    component.ngOnInit();
    component.heroes$.subscribe((heroes) => {
      expect(heroes).toEqual(initialState.heroes);
      done();
    });
  });
});
