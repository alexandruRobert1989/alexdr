import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import {AnimationDirective} from '../../../directives/animation.directive';
import {AnimationType} from '../../../enums/animation-type-enum';

@Component({
    selector: 'app-navbar',
  imports: [
    NgClass,
    AnimationDirective
  ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDarkTheme: boolean = false;


  ngOnInit(): void {
    this.loadTheme();
  }


  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.classList.toggle('dark-theme', this.isDarkTheme);
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    document.documentElement.classList.toggle('dark-theme', this.isDarkTheme);
  }

  protected readonly AnimationType = AnimationType;
}
