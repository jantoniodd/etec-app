import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriaComponent } from "./categoria.component";
import { CategoriaAddComponent } from "./categoria-add.component";
import { MaterialModule } from 'src/app/material/material.module';

const routes : Routes =[

  {path:'', component: CategoriaComponent}

]

@NgModule({
  declarations: [CategoriaComponent, CategoriaAddComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes) ,MaterialModule ,ReactiveFormsModule
  ]
})
export class CategoriasModule { }
