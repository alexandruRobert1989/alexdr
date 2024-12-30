import {Directive, ElementRef, Renderer2, AfterViewInit, Input} from '@angular/core';
import {AnimationType} from '../enums/animation-type-enum';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective implements AfterViewInit {

  @Input('appAnimation') animationType!: AnimationType;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add the  animation class to the element
    this.renderer.addClass(this.el.nativeElement, this.animationType);
  }
}
