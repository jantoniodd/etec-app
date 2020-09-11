import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/core/models';
import { VentaService } from 'src/app/core/services/venta.service';

@Component({
  selector: 'etec-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
  providers: [VentaService],
})
export class VentaComponent implements OnInit {
  ventas: Venta[] = [];

  constructor(private _service: VentaService) {}

  ngOnInit(): void {
    this._service.findAll().subscribe((resp) => (this.ventas = resp));
  }
}
