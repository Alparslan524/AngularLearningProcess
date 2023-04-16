import { Component } from '@angular/core';

@Component({
  selector: 'app-default-directives',
  templateUrl: './default-directives.component.html',
  styleUrls: ['./default-directives.component.scss'],
})
export class DefaultDirectivesComponent {
  names: string[] = ['Alparslan', 'Ferhat', 'Rabia', 'Şirin'];

  number: number = 5;

  cityPlate: number = 42;
}
