import { Directive, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { filter } from "rxjs/operators";

@Directive({
  selector: '[sappAccordion]',
})
export class AccordionDirective implements OnInit {

  
  
  // private router$: Subscription;

  // constructor(private _router: Router) {}
  constructor() {}

  ngOnInit() {
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
