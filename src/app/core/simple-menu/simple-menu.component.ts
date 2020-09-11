import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sapp-simple-menu',
  templateUrl: './simple-menu.component.html',
  styles: [],
})
export class SimpleMenuComponent implements OnInit, OnChanges {
  @Input() nodes: any[];

  public ruta: string[] = ['/'];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(){
    this.ruta.push()
  }
  
}
