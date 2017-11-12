import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AppService {
    token: string;
    user_signed_in = false;
    signupUser(email_address: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email_address, password)
    .catch(
        error => console.log(error)
    )
    }
   constructor(private router: Router){}
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