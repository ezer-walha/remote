import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { JobFormComponent } from './component/job-form/job-form.component';

const routes: Routes = [{path:'', component:HomeComponent },
{path:'add', component:JobFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
