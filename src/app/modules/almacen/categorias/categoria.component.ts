import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Category } from 'src/app/core/models';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'sapp-categoria',
  templateUrl: './categoria.component.html',
  providers: [CategoriaService],
})
export class CategoriaComponent implements OnInit {
  list: Category[] = [];

  formCategoria: FormGroup;

  constructor(private fb: FormBuilder, private _service: CategoriaService) {}

  ngOnInit(): void {
    this._service.findAll().subscribe((resp) => (this.list = resp));
    this.formCategoria = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  get f() {
    return this.formCategoria.controls;
  }

  onSubmit() {
    
    if (this.formCategoria.invalid) {
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
