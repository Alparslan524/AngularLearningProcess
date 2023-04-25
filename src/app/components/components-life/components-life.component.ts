import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-components-life',
  templateUrl: './components-life.component.html',
  styleUrls: ['./components-life.component.scss'],
})
export class ComponentsLifeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() data:String; 
  
  ngOnChanges(changes: SimpleChanges): void {//Nadir kullanılır
    console.log('1=> ngOnChanges started!!');
  }// Componentin input değişkenleri değiştiğinde (mesela inputla veri aldığında) ngOnChanges tetiklenir. Bu yüzden üstte @Input() data tanımladık.


  ngOnInit(): void {//Çok kullanılır
    console.log('2=> ngOnInit started!!');
  }// Component ilk kez oluşturulduğunda tetiklenir.

  ngDoCheck(): void {
    console.log('3=> ngDoCheck started!!');
  }// Component'in güncellenmesi durumunda bu method tetiklenmektedir.

  ngAfterContentInit(): void {
    console.log('4=> ngAfterContentInit started!!');
  }// Component'in İÇERİĞİ ilk kez oluşturulduğunda tetiklenir. 

  ngAfterContentChecked(): void {
    console.log('5=> ngAfterContentChecked started!!');
  }// Component'in İÇERİĞİ güncellendiğinde tetiklenir.

  ngAfterViewInit(): void {
    console.log('6=> ngAfterViewInit started!!');
  }// Component'in view'i ilk kez oluşturulduğunda tetiklenir.

  ngAfterViewChecked(): void {
    console.log('7=> ngAfterViewChecked started!!');
  }// Component'in view'i güncellendiğinde tetiklenir.

  ngOnDestroy(): void {
    console.log('8=> ngOnDestroy started!!');
  }// Component imha edilirken çalışır
  
}