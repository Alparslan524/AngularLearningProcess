import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBindingDirectives]'
})
export class HostBindingDirectivesDirective {

  //Directivin işaretlendiği DOM nesnesinin bir özelliğine bind olarak işlemler gerçekleştirebiliyoruz
  //HostListener ile farkına bak

  constructor(private element:ElementRef) { }

  @HostBinding("style.color")
  writingColor:string="red";

}
