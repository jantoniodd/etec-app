import { Directive, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { filter } from 'rxjs/operators';
import { AccordionlinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[sappAccordion]',
})
export class AccordionDirective implements OnInit {
  protected navlinks: Array<AccordionlinkDirective> = [];

  addLink(link: AccordionlinkDirective) {
    this.navlinks.push(link);
  }

  closeOtherLink(openLink: AccordionlinkDirective) {
    this.navlinks.forEach((link: AccordionlinkDirective) => {
      if (link !== openLink) {
        link.open = false;
      }
    });
  }

  // private router$: Subscription;

  // constructor(private _router: Router) {}
  constructor() {}

  ngOnInit() {
    console.log(this.navlinks);

    // // this.router$ = this._router.events
    // console.log("sappAccordion");
    // this.router$ = this._router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe( (event:NavigationEnd)=>{
    //   console.log(event);
    // } );

    // console.log(this.router$);
  }
}
