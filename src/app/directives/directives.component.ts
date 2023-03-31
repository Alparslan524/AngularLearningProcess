import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  names: string[] = ['Alparslan', 'Ferhat', 'Rabia', 'Şirin'];

  number: number = 5;

  cityPlate: number = 42;
}
