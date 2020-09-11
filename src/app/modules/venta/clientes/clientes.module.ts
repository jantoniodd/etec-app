import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';

import { ClienteComponent } from './cliente.component';
import { ClienteAddComponent } from './cliente-add.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
  },
  {
    path: 'nuevo',
    component: ClienteAddComponent,
  },
];

@NgModule({
  declarations: [ClienteComponent, ClienteAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ClientesModule {}
