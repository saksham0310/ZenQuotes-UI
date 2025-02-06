import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNav!: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe(()=>{

      const hideNav=['/auth/login','/auth/sign-up','/dashboard'];
      
      this.showNav=!hideNav.includes(this.router.url);
    });
  }

}
