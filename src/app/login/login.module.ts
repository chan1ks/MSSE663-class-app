import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

const components = [LoginComponent];

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [...components],
})
export class LoginModule {}
