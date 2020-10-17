import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const components = [HeaderComponent, NavComponent, SideNavComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forRoot([]), SharedModule],
  exports: [...components],
})
export class HeaderModule {}
