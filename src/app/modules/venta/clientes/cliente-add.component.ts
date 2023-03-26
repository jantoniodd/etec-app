import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { PersonaService } from './../../../core/services/persona.service';
import { ClienteService } from './../../../core/services/cliente.service';
import { TipoPersona, TipoDocumento } from 'src/app/core/models';

@Component({
  selector: 'etec-cliente-add',
  templateUrl: './cliente-add.component.html',
  providers: [ClienteService, PersonaService],
})
export class ClienteAddComponent implements OnInit {
  formulario: UntypedFormGroup;
  listTipoPersona: TipoPersona[] = [];
  listTipoDocumento: TipoDocumento[] = [];

  constructor(
    private _fb: UntypedFormBuilder,
    private _service: ClienteService,
    private _servicePersona: PersonaService
  ) {}

  ngOnInit(): void {
    this._servicePersona
      .getTypesOfPersons()
      .subscribe((data) => (this.listTipoPersona = data));

    this._servicePersona
      .getTypesOfDocuments()
      .subscribe((data) => (this.listTipoDocumento = data));

    this.formulario = this._fb.group({
      tipo_persona: [null, Validators.required],
      tipo_documento: [null, Validators.required],
      nro_doc_ide: ['', Validators.required],
      nombres: ['', Validators.required],
      ape_paterno: ['', Validators.required],
      ape_materno: ['', Validators.required],
      fec_nacido: ['', Validators.required],
    });
  }

  onSubmit() {

    if (this.formulario.invalid) {
      console.log('formulario invalido');
      return;
    }

    this._service
      .create(this.formulario.value)
      .subscribe((p) => console.log(p));
  }
}
