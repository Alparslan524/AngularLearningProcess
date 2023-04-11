import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIfStructuralDirective]',
})
export class CustomIfStructuralDirectiveDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef 
    // Bu değişkenler sayesinde Structural Directive oluşturduk
  ) {}

  @Input() set appCustomIfStructuralDirective(value: boolean) {
    if (value == true) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } //Gönderilen parametre true ise ilgili elemanı containere ekle ve göster, değilse containeri clear et
    else {
      this.viewContainerRef.clear;
    }
  }
}
