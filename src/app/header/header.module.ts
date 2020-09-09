import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '../header/header.component';
import { NavComponent } from './nav/nav.component';

const components = [HeaderComponent, NavComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forRoot([]), NgbNavModule],
  exports: [...components],
})
export class HeaderModule {}
