import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';

import { VentaComponent } from './venta.component';
import { VentaAddComponent } from './venta-add.component';

const routes: Routes = [
  {
    path: '',
    component: VentaComponent,
  },
  {
    path: 'nuevo',
    component: VentaAddComponent,
  },
];

@NgModule({
  declarations: [VentaComponent, VentaAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class VentasModule {}
