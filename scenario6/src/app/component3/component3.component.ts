import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `<h2>{{parentData}}</h2>`,
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
//input decorator for parentData
@Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
