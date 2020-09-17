import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appState, AuthEffects } from './store';
import { HeroesEffects } from './hero-table/store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appState),
    StoreDevtoolsModule.instrument({ maxAge: false }),
    EffectsModule.forRoot([AuthEffects, HeroesEffects]),
  ],
})
export class NgrxModule {}
