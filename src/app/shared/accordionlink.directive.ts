import { Directive, HostBinding, Input, Inject, OnInit } from '@angular/core';
import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[sappAccordionlink]',
})
export class AccordionlinkDirective implements OnInit {

  protected _open: boolean;

  @HostBinding('class.nav-item-open')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    if(value){
      this.nav.closeOtherLink(this);
    }
  }

  constructor(@Inject(AccordionDirective) protected nav : AccordionDirective) {}

  ngOnInit(){
    this.nav.addLink(this);
  }

  toggle() {
    this.open = !this.open;
  }
}
