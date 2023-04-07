import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListenerDirectives]',
})
export class HostListenerDirectivesDirective { 
  constructor(private element: ElementRef) {}

  //Bu custom directivin kullandığı html nesnesine "click" eventi gerçekleştiği anda HostListener çalışacak

  @HostListener('click')
  onClick() {
    alert('Clicked Html object');
  }
}
