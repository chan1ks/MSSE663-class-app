import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing.module';

// Components
import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './components/heroes-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

// Store
import { HeroesEffects } from './store';

const components = [HeroesComponent, HeroesListComponent, HeroDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule,
    HeroesRoutingModule,
    EffectsModule.forFeature([HeroesEffects]),
  ],
  exports: [...components],
})
export class HeroesModule {}
