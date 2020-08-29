import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaAddComponent } from './categorias/categoria-add.component';
import { CategoriaComponent } from './categorias/categoria.component';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'categorias',
    component: CategoriaComponent,
  },
];

@NgModule({
  declarations: [CategoriaAddComponent, CategoriaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AlmacenModule {}
