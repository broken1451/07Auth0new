import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router, @Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  goto(path: string) {
    this.router.navigate([`/${path}`], {});
  }

}
