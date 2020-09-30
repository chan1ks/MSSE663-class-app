import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeroesModule } from '../heroes/heroes.module';

const components = [HomeComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HeroesModule],
  exports: [...components],
})
export class HomeModule {}
