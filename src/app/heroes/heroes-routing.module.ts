import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesGuard } from './heroes.guard';
import { HeroesComponent } from './heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: ':heroId',
    component: HeroDetailsComponent,
    canActivate: [HeroesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
