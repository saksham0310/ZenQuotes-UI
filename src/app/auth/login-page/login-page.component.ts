import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email: FormControl;
  password: FormControl;
  hide = false;

  constructor(private auth: AuthServiceService) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  onSubmit() {
      if (this.email.valid && this.password.valid) {
        const user: User = { email: this.email.value, password: this.password.value };
        console.log(user);
        this.auth.login(user).subscribe(
          {
            next: (response) => {
              console.log("login successful")
            },
            error: (error) => {
              console.log("Invalid!!",error)
            }
          }
        )
      }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
