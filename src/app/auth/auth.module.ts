import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Store
import { AuthEffects } from './store';

const components = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [...components],
})
export class AuthModule {}
