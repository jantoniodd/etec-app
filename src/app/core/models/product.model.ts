import { Category } from './category.model';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  category: Category;
  precio_pc: number;
  precio_pv: number;
  cantidad: number;
  estado: number;
  create_at: string;
}
