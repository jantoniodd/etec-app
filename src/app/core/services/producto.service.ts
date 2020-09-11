import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environment } from "../../../environments/environment";
import { Product } from '../models';

@Injectable()
export class ProductoService {

  constructor(private _http : HttpClient) {}

  save(entity: Product): Observable<Product> {
    const url = `${environment.url}/products`;
    return this._http.post<Product>(url, entity);
  }

  paginate(page: number, size: number): Observable<any> {
    const url = `${environment.url}/products`;

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this._http.get<any>(`${url}/page`, { params: params });
  }
}
