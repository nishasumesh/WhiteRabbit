import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users_details: any;
  
  constructor(private httpClient : HttpClient) { }

  apiUrl =  "https://randomuser.me/api/0.8/?results=20";
  getdetails() {
    return this.httpClient.get(this.apiUrl);  
 }

}
