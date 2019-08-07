import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-component3',
  //button for send event
  template: `<button (click)="fireEvent()">send event</button>`,
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
@Output() public childEvent=new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('hey Rama');
    }

}
