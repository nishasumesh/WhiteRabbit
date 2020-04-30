import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../users.service';
import {CrednetialService} from '../credentials.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  public users_details:any;
  error_message: string;
  constructor(private router: Router,private formBuilder: FormBuilder,private userservice: UsersService,private credential:CrednetialService) { 

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });
   
  }

  onSubmit(){
    this.credential.usercredentails(this.registerForm.value.username,this.registerForm.value.password).subscribe(data=>{
     if(data){
      this.router.navigate(['/home']);
     }else{
       this.error_message= "The username and password is wrong";
       console.log("the username  and password is wrong");
     }
    })
  }

  ngOnInit() {
    this.userservice.getdetails().subscribe(data => {
      this.users_details = data;
      console.log(this.users_details);
      localStorage.setItem('user_details',JSON.stringify(this.users_details));
      var retrievedObject = localStorage.getItem('user_details');
     console.log('retrievedObject: ', JSON.parse(retrievedObject));
  })
    
  }

}
