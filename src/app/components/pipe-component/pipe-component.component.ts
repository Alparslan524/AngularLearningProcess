import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.scss'],
})
export class PipeComponentComponent {
  date: Date;
  constructor() {
    this.date = new Date(2002, 8, 19);
  }
  name = 'Alparslan';
  price = 50;
  comment = 'Bu bir denemedir looo!';
  customPipeText = 'Doolduuuur be meyhaneciiii, boş kalmaasın kadehimmm....';
}
