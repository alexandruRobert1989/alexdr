import { Component, Input, OnDestroy } from '@angular/core';
import player from 'lottie-web';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import {NgStyle} from '@angular/common';

export function playerFactory() {
  return player;
}

@Component({
  selector: 'custom-lottie',
  standalone: true,
  imports: [LottieComponent, NgStyle],
  providers: [
    provideLottieOptions({
      player: playerFactory,
    }),
  ],
  templateUrl: './custom-lottie.component.html',
  styleUrls: ['./custom-lottie.component.scss'],
})
export class CustomLottieComponent implements OnDestroy {
  @Input() options!: any; // Required: Lottie options (e.g., path to animation file)
  @Input() speed: number = 0.5;
  @Input() direction: number = 1; // forward
  @Input() loop: boolean = true;
  @Input() customStyles?: { [key: string]: string }; // Optional: Inline styles for the container

  private animationInstance: any;

  onAnimationCreated(animation: any): void {
    this.animationInstance = animation;
    animation.setSpeed(this.speed);
    animation.setDirection(this.direction);
    animation.loop = this.loop;
    animation.play();
  }

  ngOnDestroy(): void {
    if (this.animationInstance) {
      this.animationInstance.destroy();
    }
  }
}
