import { Directive, HostListener, Inject } from '@angular/core';
import { AccordionlinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[sappAccordiontoggle]',
})
export class AccordiontoggleDirective {
  constructor(
    @Inject(AccordionlinkDirective) protected link: AccordionlinkDirective
  ) {}

  @HostListener('click')
  onClickItem() {
    this.link.toggle();
  }
}
