import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';

const components = [PageNotFoundComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
})
export class PageNotFoundModule {}
