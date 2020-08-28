import { TipoPersona, TipoDocumento } from '.';
import { Genero } from './genero.model';
import { Ubigeo } from './ubigeo.model';

export interface Employee {
  id: number;
  tipo_persona: TipoPersona;
  tipo_doc_ide: TipoDocumento;
  nro_doc_ide: string;
  ape_paterno: string;
  ape_materno: string;
  nombres: string;
  fecNac: string;
  genero: Genero;
  departamento: Ubigeo;
  provincia: Ubigeo;
  distrito: Ubigeo;
}
