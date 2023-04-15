import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.scss'],
})
export class PipeComponentComponent {
  name = 'Alparslan';
  price = 50;
  date = "19.09.2002";/* 19/09/2002 */
  comment = "Bu bir denemedir looo!"
  customPipeText="Doolduuuur be meyhaneciiii, boş kalmaasın kadehimmm...."
}
