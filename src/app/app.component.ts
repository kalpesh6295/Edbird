import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  display=false;
  user_signed_in=false;
  SignInPopUp($event){
    this.display=$event;
  }
  ngOnInit(){
    var config = {
      apiKey: "AIzaSyAqKMSoMIFr6uR2g4qbyv9VOZ0_OAn0Lzk",
      authDomain: "edbird-56c2c.firebaseapp.com",
      databaseURL: "https://edbird-56c2c.firebaseio.com",
      projectId: "edbird-56c2c",
      storageBucket: "edbird-56c2c.appspot.com",
      messagingSenderId: "102733498004"
    };
    firebase.initializeApp(config);
  }
  constructor(private appservice: AppService){}
  onsignup(form: NgForm){
    const email_address = form.value.email_address;
    const password = form.value.password;
    this.appservice.signupUser(email_address, password);
  }

  onsignin(form: NgForm){
    const email_address = form.value.email_address;
    const password = form.value.password;
    this.appservice.signinUser(email_address, password);
    
  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      this.display=false;
      this.user_signed_in=true;
    }
    else{

    }
  })
  }

  //facebook sign in 
  
  provider = new firebase.auth.FacebookAuthProvider();
  
  facebook_login(){
    firebase.auth().signInWithRedirect(this.provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
this.display=false;
  }

}
