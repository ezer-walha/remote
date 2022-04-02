import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobFormComponent } from './component/job-form/job-form.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserJobComponent } from './component/browser-job/browser-job.component';
import { CandidateComponent } from './component/candidate/candidate.component';
import { ContactComponent } from './component/contact/contact.component';
import { JobDetailsComponent } from './component/job-details/job-details.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    JobFormComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BrowserJobComponent,
    CandidateComponent,
    ContactComponent,
    JobDetailsComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
