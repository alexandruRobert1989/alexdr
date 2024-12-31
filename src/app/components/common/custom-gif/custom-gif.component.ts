import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'custom-gif',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './custom-gif.component.html',
  styleUrls: ['./custom-gif.component.scss'],
})
export class CustomGifComponent {
  @Input() src!: string;
  @Input() alt: string = 'GIF Image';
  @Input() customStyles?: { [key: string]: string };
}
