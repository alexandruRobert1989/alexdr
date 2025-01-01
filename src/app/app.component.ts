import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {AnimationType} from './enums/animation-type-enum';
import {CustomGifDocComponent} from './components/custom-gif-doc/custom-gif-doc.component';
import {AnimationDocComponent} from './components/animation-doc/animation-doc.component';
import {CustomVideoDocComponent} from './components/custom-video-doc/custom-video-doc.component';
import {CustomLottieDocComponent} from './components/custom-lottie-doc/custom-lottie-doc.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CustomGifDocComponent, AnimationDocComponent, CustomVideoDocComponent, CustomLottieDocComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'alexdr-ai';


  lottieRocket = {
    path: 'assets/lotties/Animation - fix-rocket.json',
  };

  lottieOptionsCropped = {
    path: 'assets/lotties/CroppedAIBlueish.json',
  };

  protected readonly AnimationType = AnimationType;
}
