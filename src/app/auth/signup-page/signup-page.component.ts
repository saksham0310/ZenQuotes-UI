import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  isLinear = true;
  firstFormGroup : FormGroup;
  secondFormGroup : FormGroup;

  constructor(private _formBuilder: FormBuilder, private authService:AuthServiceService) {

    this.firstFormGroup = this._formBuilder.group({
      Email: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      Password: ['', Validators.required],
    });

  }
  
  onSubmit() {
    try {
      if(this.firstFormGroup.valid && this.secondFormGroup.valid) {

        const user: User = {
          email:this.firstFormGroup.value.Email,
          password:this.secondFormGroup.value.Password
        }
        
        this.authService.signup(user).subscribe({
          next:(response)=>{
          },
          error:(err)=>{
          }
        });
    } 
  } catch(error) {
    }
  }

}
