import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { MaterialUiModule } from '../common/module/material-ui/material-ui.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    MaterialUiModule,
    CommonModule
  ]
})
export class AuthModule { }
