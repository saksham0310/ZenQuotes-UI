import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'upload-page', component: UploadPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
