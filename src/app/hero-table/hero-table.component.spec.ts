import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTableComponent } from './hero-table.component';
import { HEROES } from './heroes';

describe('HeroTableComponent', () => {
  let component: HeroTableComponent;
  let fixture: ComponentFixture<HeroTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a list of heroes', () => {
    expect(component.heroes).toEqual(HEROES);
  });
});
