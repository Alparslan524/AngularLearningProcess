import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

@Input() childData:string;/* input değişkeni ile parenttan gelen datayı childData değişkeninde tutucaz ve 
                          istediğimiz zaman childData ismi ile kullanıcaz */

}
