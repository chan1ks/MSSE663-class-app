import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './hero-list/hero-list.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { HeroesGuard } from './hero-list/heroes.guard';

import { HeroDetailsComponent } from './hero-list/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: 'heroes/:heroId',
    component: HeroDetailsComponent,
    canActivate: [HeroesGuard],
  },
  {
    path: 'heroes',
    component: HeroesListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
