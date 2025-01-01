import { Component } from '@angular/core';
import {CustomLottieComponent} from '../common/custom-lottie/custom-lottie.component';

@Component({
  selector: 'app-home',
  imports: [
    CustomLottieComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  lottieOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_touohxv0.json', // URL or local path to Lottie file
  };

}
