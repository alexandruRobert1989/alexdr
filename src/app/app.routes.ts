import { Routes } from '@angular/router';
import {AnimationDocComponent} from './components/animation-doc/animation-doc.component';
import {CustomGifDocComponent} from './components/custom-gif-doc/custom-gif-doc.component';
import {CustomVideoDocComponent} from './components/custom-video-doc/custom-video-doc.component';
import {CustomLottieDocComponent} from './components/custom-lottie-doc/custom-lottie-doc.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ContactComponent} from './components/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'animation-doc', component: AnimationDocComponent },
  { path: 'custom-gif-doc', component: CustomGifDocComponent },
  { path: 'custom-video-doc', component: CustomVideoDocComponent },
  { path: 'custom-lottie-doc', component: CustomLottieDocComponent }
];
