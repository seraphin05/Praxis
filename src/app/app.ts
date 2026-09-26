import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html'
})
export class App {
    constructor() {
    AOS.init(
      {
        duration: 2000,
        once: true
      }
    );
  }
}
