import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "./../shared/shared.module";

import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from '../modules/categories/categories.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    CategoriesComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class LayoutModule { }
