import { Directive, OnInit, AfterViewInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  RouterEvent,
} from '@angular/router';
import { Subscription } from 'rxjs';

import { filter, tap } from 'rxjs/operators';
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

  getUrl() {
    return this._router.url;
  }

  private __router: Subscription;

  ngOnInit(): void {
    this.__router = this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.navlinks.forEach((e: AccordionlinkDirective) => {
          const routeUrl = this.getUrl();
          const currentUrl = routeUrl.split('/');
        });
      });
  }

  constructor(private _router: Router) {}
}
