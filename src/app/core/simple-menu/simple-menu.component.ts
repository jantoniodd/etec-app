import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sapp-simple-menu',
  templateUrl: './simple-menu.component.html',
  styles: [
  ]
})
export class SimpleMenuComponent implements OnInit {

  @Input() nodes : any[];

  constructor() { }

  ngOnInit(): void {
  }

}
