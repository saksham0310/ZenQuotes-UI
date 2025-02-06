import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'src/app/auth/models/user.model';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email: FormControl;
  password: FormControl;
  hide = false;

  constructor(private auth: AuthServiceService,
              private notificationService: NotificationService,
              private route:Router  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  onSubmit() {
    if (this.email.valid && this.password.valid) {
      const user: User = { email: this.email.value, password: this.password.value };
      this.auth.login(user).subscribe(
        {
          next: () => {
            this.notificationService.callNotification('Login successful!!', "success");
            this.route.navigate(['/home-page']);
          },
          error: (error) => {
            this.notificationService.callNotification('Login un-successful!!', "error");
            console.log(error)
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
