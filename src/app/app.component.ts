import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';

// Define the player factory function
export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LottieComponent],
  providers: [
    provideLottieOptions({
      player: playerFactory,
    }),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'alexdr-ai';

  // Define the Lottie options
  lottieOptions = {
    path: 'assets/lotties/Animation - AI_blueish.json',
  };

  private animationInstance: any;

  // Handle animation instance for customization
  onAnimationCreated(animation: any): void {
    this.animationInstance = animation;
    animation.setSpeed(0.5);
    animation.setDirection(1); // Play forward
    animation.loop = true; // Explicitly disable looping
    animation.play(); // Ensure the animation starts
  }

  ngOnDestroy(): void {
    if (this.animationInstance) {
      this.animationInstance.destroy();
      console.log('Lottie animation destroyed');
    }
  }
}
