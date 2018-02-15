import { Directive, ElementRef, Renderer, HostBinding, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {

  private backgroundColor: String = 'white';
  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = 'pink';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'blue';
  }

  @HostBinding('style.backgroundColor') get getColor() {
    return this.backgroundColor;
  }


  constructor(private elementRef: ElementRef,
    private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';

  }

}
