import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Customer } from 'src/app/core/models';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { MaterialModule } from 'src/app/material/material.module';


@Component({
  selector: 'etec-search-cliente-popup',
  templateUrl: './search-cliente-popup.component.html',
  providers: [ClienteService],
})
export class SearchClientePopupComponent implements OnInit {
  list: Customer[] = [];

  pageSizeOptions: number[] = [10, 15, 20];

  length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  displayedColumns: string[] = [
    // 'id',
    'accion',
    'nro_doc_ide',
    'cliente',
  ];

  constructor(
    public _dialogRef: MatDialogRef<SearchClientePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private _service: ClienteService
  ) {
    console.log(data);
  }

  ngOnInit(): void {    

    console.log("OnInit");
    console.log(this.data);

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

  close() {
    this._dialogRef.close(this.data);
  }

  selected(e: Customer) {
    this.data = e;
    this.close();
  }
}

@NgModule({
  imports: [MaterialModule],
  declarations: [SearchClientePopupComponent],
})
class ClientePopUpModule {}
