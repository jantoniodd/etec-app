import { TipoPersona, TipoDocumento } from '.';

export interface Person {
  id: number;
  tipo_persona: TipoPersona;
  tipo_doc_ide: TipoDocumento;
  nro_doc_ide: string;
  ape_paterno: string;
  ape_materno: string;
  nombres: string;
  fecNac: string;
}
