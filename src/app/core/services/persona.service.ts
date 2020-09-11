import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TipoPersona, TipoDocumento } from './../models';
import { environment } from './../../../environments/environment';

@Injectable()
export class PersonaService {

  private url: string = `${environment.url}/persons`;

  constructor(private _http: HttpClient) {}

  getTypesOfPersons(): Observable<TipoPersona[]> {
    return this._http.get<TipoPersona[]>(`${this.url}/tipo-persona`);
  }

  getTypesOfDocuments(): Observable<TipoDocumento[]> {
    return this._http.get<TipoDocumento[]>(`${this.url}/tipo-documento`);
  }
}
