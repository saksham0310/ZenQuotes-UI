import { NgModule } from '@angular/core';
import { QuotesRoutingModule } from './quotes-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MaterialUiModule } from 'src/app/common/module/material-ui/material-ui.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomePageComponent,
    ProfilePageComponent,
    UploadPageComponent
  ],
  imports: [
    QuotesRoutingModule,
    MaterialUiModule,
    CommonModule
  ]
})
export class QuotesModule { }
