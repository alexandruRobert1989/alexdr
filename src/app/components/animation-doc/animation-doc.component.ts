import { Component } from '@angular/core';
import {AnimationDirective} from '../../directives/animation.directive';
import {AnimationType} from '../../enums/animation-type-enum';

@Component({
  selector: 'app-animation-doc',
  imports: [
    AnimationDirective
  ],
  templateUrl: './animation-doc.component.html',
  styleUrl: './animation-doc.component.scss'
})
export class AnimationDocComponent {

  protected readonly AnimationType = AnimationType;
}
