import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'etec-categories',
  templateUrl: './categories.component.html',
  styles: [],
})
export class CategoriesComponent implements OnInit {
  list: Category[] = [];

  formCategoria: FormGroup;

  constructor(private fb: FormBuilder, private _service: CategoryService) {}

  ngOnInit(): void {
    this._service.findAll().subscribe((resp) => this.list = resp);
    console.log('holaaaa');
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
