import { NgModule } from '@angular/core';

// General Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Scaffolding
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

// Directives
import { MatSortModule } from '@angular/material/sort';

const MAT_GENERAL = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
];
const MAT_SCAFFOLDING = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
];

const MAT_DIRECTIVES = [MatSortModule];

@NgModule({
  imports: [...MAT_GENERAL, ...MAT_SCAFFOLDING, ...MAT_DIRECTIVES],
  exports: [...MAT_GENERAL, ...MAT_SCAFFOLDING, ...MAT_DIRECTIVES],
})
export class SharedModule {}
