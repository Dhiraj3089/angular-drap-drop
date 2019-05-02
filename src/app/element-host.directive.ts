import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElementHost]'
})
export class ElementHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}