import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { Category } from 'src/app/core/models';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'sapp-categoria',
  templateUrl: './categoria.component.html',
  providers: [CategoriaService],
})
export class CategoriaComponent implements OnInit {
  list: Category[] = [];

  // pageSizeOptions: number[] = [10, 15, 20];

  // length: number = 0;
  // pageSize: number = 10;
  // pageIndex: number = 0;

  displayedColumns: string[] = [
    // 'id',
    'nombre',
    'descripcion',
  ];

  formulario: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private _service: CategoriaService) {}

  ngOnInit(): void {
    this._service.findAll().subscribe((resp) => (this.list = resp));
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  get f() {
    return this.formulario.controls;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }

    let entidad: Category = {
      name: this.f.name.value,
      description: this.f.description.value,
    };

    this._service.save(entidad).subscribe((resp) => {
      console.log(resp);
    });
  }
}
