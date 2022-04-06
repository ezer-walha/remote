import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidature-spontanee',
  templateUrl: './candidature-spontanee.component.html',
  styleUrls: ['./candidature-spontanee.component.css']
})
export class CandidatureSpontaneeComponent implements OnInit {
  candidature!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.candidature=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      jobtitle:['',[Validators.required]],
      linkedin:['',[Validators.required]]
      
      
    })
  }

  apply(){
    console.log('apply',this.candidature.value);
  }


}
