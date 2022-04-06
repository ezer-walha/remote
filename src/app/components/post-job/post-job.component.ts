import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  postjob!:FormGroup;
   

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.postjob=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      jobtitle:['',[Validators.required]],
      location:['',[Validators.required]],
      companyname:['',[Validators.required]],
      tagline:['',[Validators.required]],
      website:['']
    })
  }

  savejob(){
    console.log('savejob',this.postjob.value);
  }

}
