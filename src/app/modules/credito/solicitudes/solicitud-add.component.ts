import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, ItemVenta, Product, Venta } from 'src/app/core/models';

@Component({
  selector: 'etec-solicitud-add',
  templateUrl: './solicitud-add.component.html',
})
export class SolicitudAddComponent implements OnInit {
  formulario: UntypedFormGroup;

  venta: Venta;
  customer: Customer;
  product: Product;
  detalle: ItemVenta[] = [];

  datasource = new MatTableDataSource(this.detalle);

  displayedColumns: string[] = [
    // 'id',
    'producto',
    'precio',
    'cantidad',
    'subtotal',
    // 'accion',
  ];

  constructor(private _dialog: MatDialog, private _fb: UntypedFormBuilder) {}

  get items_venta(): UntypedFormArray {
    return this.formulario.get('itemsventa') as UntypedFormArray;
  }

  ngOnInit(): void {
    this.formulario = this._fb.group({
      cliente: this._fb.group({
        id: [''],
        persona: this._fb.group({
          tipo_persona: this._fb.group({ description: [''] }),
          tipo_doc_ide: this._fb.group({ description1: [''] }),
          nro_doc_ide: [''],
          nombres: [''],
        }),
      }),
      fecha: ['2020/11/11'],
      itemsventa: this._fb.array([]),
    });
  }

  onSubmit() {}

  async addCustomer() {
    const { SearchClientePopupComponent } = await import(
      /* webpackPrefetch: true */
      './../../../modals/popup/search-cliente-popup/search-cliente-popup.component'
    );

    const dialogRef = this._dialog.open(SearchClientePopupComponent, {
      width: '800px',
      data: {
        customer: this.customer,
      },
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.customer = resp;
        this.formulario.patchValue({
          cliente: {
            id: resp.id,
            persona: {
              tipo_persona: {
                description: resp?.persona.tipo_persona.description,
              },
              tipo_doc_ide: {
                description1: resp?.persona.tipo_doc_ide.description,
              },
              nro_doc_ide: resp?.persona.nro_doc_ide,
              nombres: resp?.persona.nombres,
            },
          },
        });
      }
    });
  }
}
