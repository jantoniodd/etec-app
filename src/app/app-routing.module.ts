import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'almacen',
        loadChildren: () =>
          import('./modules/almacen/almacen.module').then(
            (m) => m.AlmacenModule
          ),
      },
      {
        path: 'credito',
        loadChildren: () =>
          import('./modules/credito/credito.module').then(
            (m) => m.CreditoModule
          ),
      },
      {
        path: 'venta',
        loadChildren: () =>
          import('./modules/venta/venta.module').then((m) => m.VentaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
