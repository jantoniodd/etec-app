import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './productos/producto.component';
import { ProductoAddComponent } from './productos/producto-add.component';
import { CategoriaAddComponent } from './categorias/categoria-add.component';
import { CategoriaComponent } from './categorias/categoria.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductoComponent,
  },
  {
    path: 'productos/nuevo',
    component: ProductoAddComponent,
  },
  {
    path: 'categorias',
    component: CategoriaComponent,
  },
];

@NgModule({
  declarations: [
    ProductoComponent,
    ProductoAddComponent,
    CategoriaAddComponent,
    CategoriaComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, ReactiveFormsModule],
})
export class AlmacenModule {}
