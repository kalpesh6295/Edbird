import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class AppService {
    token: string;
    userId:string;
    user_signed_in = false;
   constructor(private http: Http,private router: Router){}
    signupUser(email_address: string, password: string,username: string,mobile_number:string){
    firebase.auth().createUserWithEmailAndPassword(email_address, password)
    
    .then(
      response => {
        this.user_signed_in=true;
        var userId = firebase.auth().currentUser.uid;
        var userdata = {
          username: username,
          userId: userId,
          email_address: email_address,
          mobile_number: mobile_number,
          password: password
        }
        this.http.put("https://edbird-56c2c.firebaseio.com/users/" +userId+".json", userdata)
        .subscribe(
          (response)=> console.log(response),
          (error)=> console.log(error)
        )

         firebase.auth().currentUser.getToken()

           .then(
             (token: string) => this.token = token
           )
       }
 )
    .catch(
        error => console.log(error)
    )
    }
    signinUser(email_address: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email_address, password)
        .then(
             response => {
               this.user_signed_in=true;
                firebase.auth().currentUser.getToken()
                  .then(
                    (token: string) => this.token = token
                  )
              }
        )
        .catch(
            error => console.log(error)
        )
        }
        getToken() {
            firebase.auth().currentUser.getToken()
              .then(
                (token: string) => this.token = token
              )
            return this.token;
          }
          logout() {
            firebase.auth().signOut();
            this.token = null;
            this.user_signed_in=false;
          }
}