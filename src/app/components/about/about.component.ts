import { Component } from '@angular/core';
import {CustomGifComponent} from '../common/custom-gif/custom-gif.component';

@Component({
  selector: 'app-about',
  imports: [
    CustomGifComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


}
