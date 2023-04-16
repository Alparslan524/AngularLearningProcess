import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() pageName: string;
  // pageName dışarıdan yani başka componentten değer alıcak
}
