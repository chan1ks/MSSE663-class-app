import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './components/heroes-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';

const components = [HeroesComponent, HeroesListComponent, HeroDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HeroesRoutingModule, SortableHeaderModule],
  exports: [...components],
})
export class HeroesModule {}
