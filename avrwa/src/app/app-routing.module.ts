import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CctvConfigComponent} from "./components/cctv-config/cctv-config.component";
import {MediaUploadComponent} from "./components/media-upload/media-upload.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cctv', component: CctvConfigComponent },
  { path: 'media', component: MediaUploadComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
