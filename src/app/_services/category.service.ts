import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../_models';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<Category[]> {
    const url = `${environment.url}/products/categories`;

    return this._http.get<Category[]>(url);
  }

  save(entidad: Category): Observable<Category> {
    const url = `${environment.url}/products/categories`;

    return this._http.post<Category>(url, entidad).pipe(
      map((resp) => resp),
      catchError((err) => throwError(err))
    );
  }
}
