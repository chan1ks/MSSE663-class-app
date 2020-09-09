import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroTableComponent } from './hero-table.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';

const components = [HeroTableComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SortableHeaderModule],
  exports: [...components],
})
export class HeroTableModule {}
