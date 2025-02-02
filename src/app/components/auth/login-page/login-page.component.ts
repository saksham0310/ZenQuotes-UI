import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { User } from 'src/app/models/user.model';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email: FormControl;
  password: FormControl;
  hide = false;

  constructor(private auth: AuthServiceService, private notificationService: NotificationService) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  onSubmit() {
    if (this.email.valid && this.password.valid) {
      const user: User = { email: this.email.value, password: this.password.value };
      console.log(user);
      this.auth.login(user).subscribe(
        {
          next: () => {
            this.notificationService.callNotification('Login successful!!', "success");
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
