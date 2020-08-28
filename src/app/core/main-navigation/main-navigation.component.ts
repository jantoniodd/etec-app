import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sapp-main-navigation',
  templateUrl: './main-navigation.component.html'
})
export class MainNavigationComponent implements OnInit {

  @Input() nodes : any[];

  constructor() { }

  ngOnInit(): void {
  }

}
