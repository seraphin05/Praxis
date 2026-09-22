import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html'
})
export class Header {

  menuOuvert = false;

  ouvrirMenu() {
    this.menuOuvert = !this.menuOuvert;
  }

  fermerMenu() {
    this.menuOuvert = false;
  }
}
