import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'custom-video',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './custom-video.component.html',
  styleUrls: ['./custom-video.component.scss'],
})
export class CustomVideoComponent {
  @Input() src!: string; // Required: Path to the video file
  @Input() poster?: string; // Optional: Poster image for the video
  @Input() controls: boolean = true; // Optional: Show playback controls
  @Input() autoplay: boolean = false; // Optional: Autoplay the video
  @Input() loop: boolean = false; // Optional: Loop the video
  @Input() muted: boolean = false; // Optional: Mute the video
  @Input() width?: string; // Optional: Width of the video
  @Input() maxWidth?: string; // Optional: Max-width of the video
  @Input() customStyles?: { [key: string]: string }; // Optional: Inline styles for the video
  @Input() allowDownload: boolean = true; // Allow the "Download" option by default


  // Control "Download" option in video controls
  get videoAttributes(): { [key: string]: any } {
    return {
      controlsList: this.allowDownload ? '' : 'nodownload',
    };
  }

  // Combine dynamic styles with default or parent-provided styles
  get videoStyles(): { [key: string]: string } {
    return {
      ...{ width: this.width || '100%', 'max-width': this.maxWidth || '800px' },
      ...this.customStyles,
    };
  }
}
