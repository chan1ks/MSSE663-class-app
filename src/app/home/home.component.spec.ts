import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { HeroesFacade } from '../heroes/heroes.facade';
import { MOCK_STORE$ } from '../store/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HeroesFacade, { provide: Store, useValue: MOCK_STORE$ }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a budget', () => {
    expect(component.budget).toBe(10000);
  });
});
