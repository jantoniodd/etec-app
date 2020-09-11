import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Customer } from "./../models";
import { environment } from "./../../../environments/environment";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {

  private url : string = `${environment.url}/customers`
  private HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private _http : HttpClient) { }

  paginate(page: number, size: number): Observable<any> {

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this._http.get<any>(`${this.url}/page`, { params: params });
  }

  search(term: string, page: number, size: number): Observable<any> {

    const params = new HttpParams()
      .set('term', term)
      .set('page', page.toString())
      .set('size', size.toString());

    return this._http.get<any>(`${this.url}/search`, { params: params });
  }

  findById(id: number): Observable<Customer> {
    return this._http.get<Customer>(`${this.url}/${id}`);
  }

  create(customer: Customer): Observable<Customer> {
    return this._http.post<Customer>(this.url, customer, { headers: this.HttpHeaders });
  }

  update(id: number, customer: Customer): Observable<Customer> {
    console.info(customer);
    return this._http.put<Customer>(`${this.url}/${id}`, customer, { headers: this.HttpHeaders });
  }

  deleteLogic(id: number): Observable<any> {
    return this._http.delete(`${this.url}/${id}`, { headers: this.HttpHeaders });
  }

}
