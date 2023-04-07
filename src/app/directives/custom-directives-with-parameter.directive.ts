import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirectivesWithParameter]'
})
export class CustomDirectivesWithParameterDirective implements OnInit {

  constructor(private element:ElementRef) {
   }
  ngOnInit(): void {//OnInıt constructordan sonra ilk çalışan şeydir
    this.element.nativeElement.style.backgroundColor=this.color;
  }


   @Input() color:string;
  //  Color değerini dışarıdan alıyoruz
}
