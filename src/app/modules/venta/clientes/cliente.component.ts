import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/core/services/cliente.service';
import { Customer } from 'src/app/core/models';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';

@Component({
  selector: 'etec-cliente',
  templateUrl: './cliente.component.html',
  providers: [ClienteService],
})
export class ClienteComponent implements OnInit {

  list: Customer[] = [];

  pageSizeOptions: number[] = [10, 15, 20];

  length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  displayedColumns: string[] = [
    // 'id',
    'tipo_persona',
    'tipo_doc_ide',
    'nro_doc_ide',
    'cliente',
  ];

  constructor(private _service: ClienteService) {}

  ngOnInit(): void {
    this._service.paginate(this.pageIndex, this.pageSize).subscribe((resp) => {
      this.length = resp.count;
      this.list = resp.content as Customer[];
    });
  }

  paginate(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this._service.paginate(this.pageIndex, this.pageSize).subscribe((resp) => {
      this.length = resp.count;
      this.list = resp.content as Customer[];
    });
  }

  delete(customer: Customer): void {
    this._service.deleteLogic(customer.id).subscribe(() => {
      console.log(`Client ${customer.persona.nombres} eliminado `);
      this.list = this.list.filter((p) => p.id != customer.id);
    });
  }
}
