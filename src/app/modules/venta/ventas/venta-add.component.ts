import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, ItemVenta, Product } from 'src/app/core/models';
import { VentaService } from './../../../core/services/venta.service';

@Component({
  selector: 'etec-venta-add',
  templateUrl: './venta-add.component.html',
  providers: [VentaService],
})
export class VentaAddComponent implements OnInit {
  formulario: UntypedFormGroup;

  detalle: ItemVenta[] = [];

  datasource = new MatTableDataSource(this.detalle);

  displayedColumns: string[] = [
    // 'id',
    'producto',
    'precio',
    'cantidad',
    'subtotal',
    'accion',
  ];

  constructor(
    private _dialog: MatDialog,
    private _fb: UntypedFormBuilder,
    private _service: VentaService
  ) {}

  get itemsVenta(): UntypedFormArray {
    return this.formulario.get('itemsventa') as UntypedFormArray;
  }

  get f() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.formulario = this._fb.group({
      cliente: this._fb.group({
        id: ['', [Validators.required]],
        persona: this._fb.group({
          tipo_persona: this._fb.group({ description: [''] }),
          tipo_doc_ide: this._fb.group({ description1: [''] }),
          nro_doc_ide: [''],
          nombres: [''],
        }),
      }),
      fecha: [new Date(), [Validators.required]],
      itemsventa: this._fb.array([], [Validators.required]),
    });
  }

  onSubmit() {
    if (this.formulario.invalid) {
      console.log('formulario invalido');
      return;
    }

    this._service.save(this.formulario.value).subscribe((p) => console.log(p));
  }

  createProducto(p: Product): UntypedFormGroup {
    return this._fb.group({
      id: [p.id, [Validators.required]],
      nombre: [p.nombre, [Validators.required]],
      precio_pv: [p.precio_pv, [Validators.required]],
    });
  }

  createItemVenta(item: ItemVenta): UntypedFormGroup {
    return this._fb.group({
      producto: this.createProducto(item.producto),
      cantidad: item.cantidad,
    });
  }

  async addCustomer() {
    const { SearchClientePopupComponent } = await import(
      /* webpackPrefetch: true */
      './../../../modals/popup/search-cliente-popup/search-cliente-popup.component'
    );

    const dialogRef = this._dialog.open(SearchClientePopupComponent, {
      width: '800px',
      data: {
        customer: {},
      },
    });

    dialogRef.afterClosed().subscribe((c: Customer) => {
      if (c) {
        this.formulario.patchValue({
          cliente: {
            id: c.id,
            persona: {
              tipo_persona: {
                description: c.persona.tipo_persona.description,
              },
              tipo_doc_ide: {
                description1: c.persona.tipo_doc_ide.description,
              },
              nro_doc_ide: c.persona.nro_doc_ide,
              nombres: c.persona.nombres,
            },
          },
        });
      }
    });
  }

  async addItemVenta() {
    const { SearchProductoPopupComponent } = await import(
      /* webpackPrefetch: true */
      './../../../modals/popup/search-producto-popup/search-producto-popup.component'
    );

    const dialogRef = this._dialog.open(SearchProductoPopupComponent, {
      width: '800px',
      data: {
        product: {},
      },
    });

    dialogRef.afterClosed().subscribe((p: Product) => {
      if (p) {
        let existe: boolean = false;

        this.detalle.forEach((x) => {
          if (x.producto.id === p.id) {
            existe = true;
          }
        });

        if (!existe) {
          this.detalle.push({
            id: this.detalle.length + 1,
            producto: p,
            cantidad: 1,
            subtotal: 1 * p.precio_pv,
          });

          this.datasource = new MatTableDataSource(this.detalle);

          const itemVenta: ItemVenta = {
            producto: p,
            cantidad: 1,
            subtotal: 1 * p.precio_pv,
          };

          this.itemsVenta.push(this.createItemVenta(itemVenta));
        } else {
          console.log('producto ya existe');
        }
      }
    });
  }

  presiona(i: number, r: ItemVenta) {
    const cantidad: number = this.itemsVenta.value[i].cantidad;

    this.detalle.forEach((j) => {
      if (j.id === r.id) {
        r.cantidad = cantidad;
        r.subtotal = cantidad * r.producto.precio_pv;
      }
    });
  }

  getTotalCost() {
    return this.detalle
      .map((i) => i.cantidad * i.producto.precio_pv)
      .reduce((a, b) => a + b, 0);
  }

  remove(i: number, e: ItemVenta) {
    this.itemsVenta.removeAt(i);

    const a = this.detalle.indexOf(e);
    this.detalle.splice(a, 1);
    this.datasource = new MatTableDataSource(this.detalle);
  }
}
