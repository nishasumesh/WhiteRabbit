import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import {UsersService} from '../users.service';
import {CustomerListComponent} from './create_user.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public users_details:any;
public detail:any;
public i:any;
show: boolean= true;

  constructor(private userservice: UsersService) { }

  search() { 
    let input = document.getElementById('searchbar')['value'] 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('users'); 
      
    for (this.i = 0; this.i < x.length; this.i++) {  
        if (!x[this.i].innerHTML.toLowerCase().includes(input)) { 
            x[this.i]['style'].display="none"; 
        } 
        else { 
            x[this.i]['style'].display="list-item";                  
        } 
    } 
} 

add(event){
  this.show = false;
}

  ngOnInit() {
      var retrievedObject = localStorage.getItem('user_details');
     console.log('retrievedObject: ', JSON.parse(retrievedObject));
     this.users_details = JSON.parse(retrievedObject);
     console.log(this.users_details);
     this.detail = this.users_details.results;
     console.log(this.detail);
   
  }

}
