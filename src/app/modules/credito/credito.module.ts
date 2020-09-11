import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes : Routes = [

  {
    path: 'solicitudes',
    loadChildren: ()=>import('./solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CreditoModule { }
