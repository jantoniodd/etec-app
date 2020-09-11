import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sapp-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  nodes: any = [
    {
      id: 1,
      label: 'Dashboard',
      link: '/',
      icon: 'icon-home',
      level: 1,
      typeLink: 0,
    },
    {
      id: 2,
      label: 'Personal',
      link: '/personal/employee',
      icon: 'icon-users',
      level: 1,
      typeLink: 0,
    },
    {
      id: 3,
      label: 'Venta',
      level: 1,
      icon: 'fas fa-cash-register',
      typeLink: 1,
      items: [
        {
          id: 4,
          label: 'Venta',
          link: '/venta/ventas',
          level: 2,
          typeLink: 0,
        },
        {
          id: 5,
          label: 'Cliente',
          link: '/venta/clientes',
          level: 2,
          typeLink: 0,
        },
      ],
    },
    {
      id: 8,
      label: 'Almacen',
      level: 1,
      icon: 'fas fa-boxes',
      typeLink: 1,
      items: [
        {
          id: 9,
          label: 'Productos',
          link: '/almacen/productos',
          level: 2,
          typeLink: 0,
        },
        {
          id: 10,
          label: 'Categorias',
          link: '/almacen/categorias',
          level: 2,
          typeLink: 0,
        },
      ],
    },
    {
      id:11,
      label:'Créditos',
      level: 1,
      icon: 'fas fa-hand-holding-usd',
      typeLink: 1,
      items:[
        {
          id:12,
          label:'Solicitud Crédito',
          link:'/credito/solicitudes',
          level: 2,
          typeLink: 0,
        }
      ]

    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
