import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDirective } from './accordion.directive';
import { AccordionlinkDirective } from './accordionlink.directive';
import { AccordiontoggleDirective } from './accordiontoggle.directive';



@NgModule({
  declarations: [AccordionDirective, AccordionlinkDirective, AccordiontoggleDirective],
  imports: [
    CommonModule
  ],
  exports:[AccordionDirective, AccordionlinkDirective, AccordiontoggleDirective]
})
export class SharedModule { }
