import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { delay } from 'rxjs';

@Component({
  selector: 'app-protejida',
  templateUrl: './protejida.component.html',
  styleUrl: './protejida.component.scss'
})
export class ProtejidaComponent implements OnInit {
  public loading: boolean = true;


  constructor(public authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.user$.pipe(
      delay(1000)
    ).subscribe(profile => {
      this.loading = false;
    });
  }

}
