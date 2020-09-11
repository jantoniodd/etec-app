import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Venta } from './../../core/models';

@Injectable()
export class VentaService {
    
  constructor(private _http: HttpClient) {}

  save(entity: Venta): Observable<Venta> {
    const url = `${environment.url}/sales`;
    return this._http.post<Venta>(url, entity);
  }

  findAll(): Observable<Venta[]> {
    const url = `${environment.url}/sales`;
    return this._http.get<Venta[]>(url);
  }

  paginate(page: number, size: number): Observable<any> {
    const url = `${environment.url}/sales`;

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this._http.get<any>(`${url}/page`, { params: params });
  }
}
