import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]', //appCustomDirectives sayesinde componentlerde bu directivi kullanabiliriz
}) //Buradaki selector sayesinde cli bu sınıfı directive olarak algılıyor. Custom Directivi directiv yapan bu kısımdır

export class CustomDirectivesDirective {
  // ng g d directives/customDirectives --skip-tests   diyerek test dosyalarını oluşturmadık
  
  constructor(private element:ElementRef) {
    element.nativeElement.style.backgroundColor="red";
    //Bu custom directivin kullanıldığı yerdeki backgroundColor red oldu (element ile eriştik ve backgroundunu değiştirdik) 
  }

  // Directive Oluşturma =>  ng generate directive directive/directiveİsmi (directive isimli klasörde directiveİsmi isminde directive oluşturuyor )
  //  Directiveler de Componentler gibi app.module.ts'e declare edilmelidir. Directive oluştururken CLI bunu otomatik yapıyor






}