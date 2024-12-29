import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {CustomLottieComponent} from './components/common/custom-lottie/custom-lottie.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CustomLottieComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'alexdr-ai';

  lottieOptions = {
    path: 'assets/lotties/Animation - AI_blueish.json',
  };

  lottieOptionsCropped = {
    path: 'assets/lotties/CroppedAIBlueish.json',
  };

}
