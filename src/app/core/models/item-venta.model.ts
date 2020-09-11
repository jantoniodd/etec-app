import { Product } from './product.model';

export interface ItemVenta {
  id?: number;
  producto?: Product;
  cantidad: number;
  subtotal : number;
}