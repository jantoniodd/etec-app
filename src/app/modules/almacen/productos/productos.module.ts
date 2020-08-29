import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './producto.component';
import { ProductoAddComponent } from './producto-add.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
  },
  {
    path: 'nuevo',
    component: ProductoAddComponent,
  },
];

@NgModule({
  declarations: [ProductoComponent, ProductoAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ProductosModule {}
