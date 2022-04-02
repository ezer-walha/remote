import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserJobComponent } from './component/browser-job/browser-job.component';
import { CandidateComponent } from './component/candidate/candidate.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { JobDetailsComponent } from './component/job-details/job-details.component';
import { JobFormComponent } from './component/job-form/job-form.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
{path:'add', component:JobFormComponent },
{path:'browser-job',component:BrowserJobComponent},
{path:'candidate',component:CandidateComponent},
{path:'contact',component:ContactComponent},
{path:'job-details',component:JobDetailsComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
