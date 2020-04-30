import { Component } from '@angular/core';
import { Customer } from './create_user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'customer-list',
  templateUrl: './create_user.component.html',
  styleUrls: ['./create_user.component.css']
})
export class CustomerListComponent
{

    registerForm: FormGroup;
    constructor(private formBuilder: FormBuilder,private router: Router) { 

   
        this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          first: ['', Validators.required],
          last: ['', Validators.required],
          Gender: ['', Validators.required],
          id: ['', Validators.required],
          date: ['', Validators.required],
          phonenumber: ['',Validators.required],
          username:['',Validators.required],
          password:['',Validators.required]

      });
       
      }

      onSubmit(){
          console.log(this.registerForm.value.first)
          var user_details={
              user:{
                  title:this.registerForm.value.title,
                  first:this.registerForm.value.first,
                  last:this.registerForm.value.last
              },
              gender:this.registerForm.value.Gender,
              email:this.registerForm.value.id,
              DOB:this.registerForm.value.date,
              phonenumber:this.registerForm.value.phonenumber,
              username: this.registerForm.value.username,
              password:this.registerForm.value.password
          }
          console.log(user_details);
          localStorage.setItem("new_users",JSON.stringify(user_details));
        //   setting the new users into the local storage
        this.router.navigate(['/login']);
      }

    
}