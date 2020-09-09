import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HeroTableModule } from '../hero-table/hero-table.module';

const components = [HomeComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HeroTableModule],
  exports: [...components],
})
export class HomeModule {}
