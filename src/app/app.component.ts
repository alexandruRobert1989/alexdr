import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {AnimationType} from './enums/animation-type-enum';
import {CustomLottieComponent} from './components/common/custom-lottie/custom-lottie.component';
import {CustomGifDocComponent} from './components/custom-gif-doc/custom-gif-doc.component';
import {AnimationDocComponent} from './components/animation-doc/animation-doc.component';
import {CustomVideoDocComponent} from './components/custom-video-doc/custom-video-doc.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CustomLottieComponent, CustomGifDocComponent, AnimationDocComponent, CustomVideoDocComponent],
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
