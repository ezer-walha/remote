import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserJobComponent } from './components/browser-job/browser-job.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatureSpontaneeComponent } from './components/candidature-spontanee/candidature-spontanee.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { LoginComponent } from './components/login/login.component';
import { PostJobComponent } from './components/post-job/post-job.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'browser-job', component: BrowserJobComponent
  },
  {
    path: 'candidate', component: CandidateComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'job-details', component: JobDetailsComponent
  },
  {
    path: 'add', component: PostJobComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'candidature-spontanee', component: CandidatureSpontaneeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
