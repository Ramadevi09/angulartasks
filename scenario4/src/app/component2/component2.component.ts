import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  //button for sendEvent
  template: `<button (click)="fireEvent()">send event</button>`,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
//output decorator for childEvent
@Output() public childEvent=new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
  this.childEvent.emit('hey Rama');
  }

}
