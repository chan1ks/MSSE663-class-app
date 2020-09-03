import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have authenticated', () => {
    component.ngOnInit();
    expect(component.isAuth).toBeTruthy();
  });

  it('should have a budget', () => {
    expect(component.budget).toBe('7000000000');
  });

  it('should have a heroes', () => {
    const heroes = [
      {
        name: 'Captain Marvel',
        rent: '2000000000',
      },
      {
        name: 'Spiderman',
        rent: 100000,
      },
      {
        name: 'Black Panther',
        rent: '100000000',
      },
      {
        name: 'Thor',
        rent: 2000000000,
      },
    ];
    expect(component.heroes).toEqual(heroes);
  });
});
