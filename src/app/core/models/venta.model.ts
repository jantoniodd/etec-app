import { Customer } from './customer.model';
import { ItemVenta } from './item-venta.model';

export interface Venta{

    cliente : Customer;
    items : ItemVenta[];
    fecha : string;

}