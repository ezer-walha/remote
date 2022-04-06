import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup!:FormGroup;
  signin!:FormGroup;
   user:any={}

   user2:any={}

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signup=this.formBuilder.group({
      email:[''],
      password:[''],
      pwd:['']
    })
    this.signin=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  Onsignup(){
    console.log('user',this.user);
    

  }
  login(){
    //console.log('login',this.signin.value);
    this.user2 = this.signin.value;
    console.log('user2',this.user2);
  }
}
