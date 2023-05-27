import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSvgHover]',
})
export class SvgHoverDirective {
  @Input() hoverIcon = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') mouseover() {}
}
