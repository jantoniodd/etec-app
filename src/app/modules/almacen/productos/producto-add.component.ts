import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from 'src/app/core/models';
import { ProductoService } from './../../../core/services/producto.service';
import { CategoriaService } from './../../../core/services/categoria.service';


@Component({
  selector: 'sapp-producto-add',
  templateUrl: './producto-add.component.html',
  providers: [ProductoService, CategoriaService],
})
export class ProductoAddComponent implements OnInit {

  title = 'Crear Producto';

  formulario: FormGroup;

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _service: ProductoService,
    private _serviceCategoria: CategoriaService
  ) {}

  ngOnInit(): void {
    this._serviceCategoria
      .findAll()
      .subscribe((resp) => (this.categories = resp as Category[]));

    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      category: [null, Validators.required],
      precio_pv: [0.0, Validators.required],
      precio_pc: [0.0, Validators.required],
      cantidad: [0.0, Validators.required],
    });
  }

  get f() {
    return this.formulario.controls;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }

    this._service.save(this.formulario.value).subscribe((resp) => {
      if (resp.id) {
        this._router.navigate(['/almacen/productos']);
      }
    });
  }
}
