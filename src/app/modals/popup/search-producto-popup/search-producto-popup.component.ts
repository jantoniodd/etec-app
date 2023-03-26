import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { Product } from './../../../core/models';

import { ProductoService } from './../../../core/services/producto.service';
import { MaterialModule } from './../../../material/material.module';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';

@Component({
  selector: 'etec-search-producto-popup',
  templateUrl: './search-producto-popup.component.html',
  providers: [ProductoService],
})
export class SearchProductoPopupComponent implements OnInit {
  list: Product[] = [];

  pageSizeOptions: number[] = [10, 15, 20];

  length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  displayedColumns: string[] = [
    // 'id',
    'accion',
    'nombre',
    'precio_pv',
    'cantidad',
  ];

  constructor(
    public _dialogRef: MatDialogRef<SearchProductoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private _service: ProductoService
  ) {}

  ngOnInit(): void {

    this._service.paginate(this.pageIndex, this.pageSize).subscribe((resp) => {
      this.length = resp.count;
      this.list = resp.content as Product[];
    });
  }

  paginate(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this._service.paginate(this.pageIndex, this.pageSize).subscribe((resp) => {
      this.length = resp.count;
      this.list = resp.content as Product[];
    });
  }

  close() {
    this._dialogRef.close(this.data);
  }

  selected(e: Product) {
    this.data = e;
    this.close();
  }
}

@NgModule({
  imports: [MaterialModule],
  declarations: [SearchProductoPopupComponent],
})
class ProductoPopUpModule {}
