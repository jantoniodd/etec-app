import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudAddComponent } from './solicitud-add.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes : Routes = [
  {
    path:'', component:SolicitudComponent
  },
  {
    path:'nuevo', component:SolicitudAddComponent
  }
]

@NgModule({
  declarations: [SolicitudComponent, SolicitudAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SolicitudesModule { }
