import {
  Directive,
  HostBinding,
  Input,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[sappAccordionlink]',
})
export class AccordionlinkDirective implements OnInit, OnDestroy {
  protected _open: boolean;

  @Input() public group: any;

  @HostBinding('class.nav-item-open')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    if (value) {
      this.nav.closeOtherLink(this);
    }
  }

  constructor(@Inject(AccordionDirective) protected nav: AccordionDirective) {}

  ngOnInit() {
    this.nav.addLink(this);
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  toggle() {
    this.open = !this.open;
  }
}
