import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HeaderService {
    
   constructor(private http: Http,private router: Router){}
   ContactUser(email_address: string,username: string,contact_number:string,requestor_query:string){
    var requestor_userdata = {
        username: username,
        email_address: email_address,
        contact_number: contact_number,
        query: requestor_query
      }
      console.log(requestor_query);
      this.http.put("https://edbird-56c2c.firebaseio.com/request/"+contact_number+".json",requestor_userdata)
      .subscribe(
        (response)=> console.log(response),
        (error)=>  console.log(error)
      )
   
}
}
    