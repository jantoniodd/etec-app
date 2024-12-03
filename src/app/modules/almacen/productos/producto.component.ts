import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/core/models';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'sapp-producto',
  templateUrl: './producto.component.html',
  providers: [ProductoService],
})
export class ProductoComponent implements OnInit {
  list: Product[] = [];

  pageSizeOptions: number[] = [10, 15, 20];

  length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  displayedColumns: string[] = [
    // 'id',
    'nombre',
    'precio_pc',
    'precio_pv',
    'cantidad',
  ];

  constructor(private _service: ProductoService) { }

  ngOnInit(): void {
    this._service.paginate(this.pageIndex, this.pageSize).subscribe((data) => {
      console.info(data);
      this.length = data.count;
      this.list = data.content as Product[];
    });
  }

  paginate(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;

    this._service.paginate(this.pageIndex, this.pageSize).subscribe((data) => {
      this.length = data.count;
      this.list = data.content as Product[];
    });
  }
}
