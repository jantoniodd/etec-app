import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sappAccordionlink]',
})
export class AccordionlinkDirective {

  protected _open: boolean;

  @HostBinding('class.nav-item-open')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
  }

  constructor() {}

  toggle() {
    this.open = !this.open;
  }
}
