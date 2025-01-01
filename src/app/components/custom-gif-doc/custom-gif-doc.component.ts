import { Component } from '@angular/core';
import {CustomGifComponent} from '../common/custom-gif/custom-gif.component';

@Component({
  selector: 'custom-gif-doc',
  standalone: true,
  imports: [CustomGifComponent],
  templateUrl: './custom-gif-doc.component.html',
  styleUrls: ['./custom-gif-doc.component.scss'],
})
export class CustomGifDocComponent {}
