import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({ message: 'Hello World!!!!! This is OUTPUT' });
  }

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
  /* burdaki kodlar ile parentta veri göndericez */
}
