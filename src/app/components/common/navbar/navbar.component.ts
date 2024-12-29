import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [
        NgClass
    ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isDarkTheme: boolean = false;

  @ViewChild('navbarLogo') navbarLogo!: ElementRef;

  ngOnInit(): void {
    this.loadTheme();
  }

  ngAfterViewInit(): void {
    if (this.navbarLogo) {
      this.navbarLogo.nativeElement.classList.add('bounce-animation');
    }
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
}
