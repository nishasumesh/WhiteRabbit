import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CrednetialService {
    users_details: any;
    
    constructor(private httpClient : HttpClient) { }
  
  
 usercredentails(username,password){
        return from(this.httpClient.get('assets/user_credentials.json')).pipe(
            map(res => {
                if(username === res['username'] && password === res['password']){
                    return true;
                }else{
                    return false;
                }
            
            }),
            catchError(err => {
              return throwError("error while calling service");
            })
          );
     
   }
  }