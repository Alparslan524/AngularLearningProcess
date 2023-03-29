import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Componentin kimliği gibi. Başka bir yerde çağırırken <app-root></app-root> kullanarak çağıracak ve component çalışacak
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLearningProcess';
// Anguların backendi gibi düşünebiliriz
}
