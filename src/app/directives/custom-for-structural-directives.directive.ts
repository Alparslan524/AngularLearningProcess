import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomForStructuralDirectives]',
})
export class CustomForStructuralDirectivesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appCustomForStructuralDirectives(value: number) {
    for (let i = 1; i <= value; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {index2 : i} );
      
    }
  }
}
