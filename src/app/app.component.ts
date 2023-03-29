import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Componentin kimliği gibi. Başka bir yerde çağırırken <app-root></app-root> kullanarak çağıracak ve component çalışacak
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularLearningProcess';
  //Anguların backendi gibi düşünebiliriz

  sendValue: string = 'Property Binding(Sented Value)';
  //Buradaki sendValue değişkenini Property Binding yaparak HomeComponent'ine gönderdik. Html kısmında app-home içinde köşeli parantezle çağırdık

  btnText: string = 'Not Clicked';
  btnClick() {
    this.btnText = 'Clicked!!!';
  }

  //Two-Way data binding
  twoWayData: string;

  disabled : boolean = true;

  bgColor : string="black";
}
