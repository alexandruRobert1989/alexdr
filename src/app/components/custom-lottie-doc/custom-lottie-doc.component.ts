import { Component } from '@angular/core';
import {CustomLottieComponent} from '../common/custom-lottie/custom-lottie.component';

@Component({
  selector: 'app-custom-lottie-doc',
  imports: [
    CustomLottieComponent
  ],
  templateUrl: './custom-lottie-doc.component.html',
  styleUrl: './custom-lottie-doc.component.scss'
})
export class CustomLottieDocComponent {

  lottieRocket = {
    path: 'assets/lotties/Animation - fix-rocket.json',
  };
}
