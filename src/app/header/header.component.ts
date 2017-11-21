import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import {HeaderService} from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 // contact_form_submit = false;
 on_submit_form=false;
 @Input() is_signed_in:boolean;
 signout(){
  firebase.auth().signOut();
  this.is_signed_in=false;
 }
  click_close(){
    this.clicked=false;
    this.menu_status="menu";
    this.menu_icon_class = "menu-icon";
    this.side_menu_class = "side-menu-hide";
  }
    display:boolean = true;
    @Output() dispEvent = new EventEmitter<boolean>();
    //@Output() user_signed_in = new EventEmitter<boolean>();

    constructor(private router:Router,private http: Http, private headerservice: HeaderService){}
  dispFunc(){
    this.display=true;
    this.dispEvent.emit(this.display);
  }
  goToHomePage(){
      this.router.navigate(['']);
  }
  goToSignIn(){
    this.router.navigate(['SignIn']);
}      
goToTat(){
      this.router.navigate(['categories/Tattoo-artist/Insights']);
  }
  goToDesign(){
    this.router.navigate(['categories/Fashion Designer/Insights']);
}
goToPhotography(){
  this.router.navigate(['categories/Photographer/Insights']);
}
goToWriting(){
  this.router.navigate(['categories/Writing/Insights']);
}
goToArtGallery(){
  this.router.navigate(['categories/ArtGallery/Insights']);
}
/*
goToProfession(){
  this.router.navigate(['categories/'+profession_name+'/Insights']);
}

*/

  clicked = false;
  side_menu_class = "";
  menu_icon_class = "menu-icon";
  menu_status = "menu";

    click_status(){
      if(!this.clicked) {
        this.menu_status = "close"; 
        this.side_menu_class = "side-menu-show";
        this.menu_icon_class = "nav-icon";
        this.clicked=true;
       }

      else{ 
        this.menu_status="menu";
        this.menu_icon_class = "menu-icon";
        this.side_menu_class = "side-menu-hide";
        this.clicked=false;      
     }
   
     }        
//background_class ="back_blur";
  click_contact=false;
    contact_us(){
      if(!this.click_contact){
        this.click_contact=true;
     //   this.background_class="back_blur";

      }

      else{
        this.click_contact=false;
      //  this.background_class="alert_back_blur";

      }
    }  
  on_contact_us(form: NgForm){
    const username = form.value.requestor_name;
    const email_address = form.value.email;
    const contact_number = form.value.number;
    const requestor_query = form.value.requestor_question_about;
    this.headerservice.ContactUser(email_address, username, contact_number,requestor_query);
    this.click_contact=false;
   // this.background_class="alert_back_blur";
      }
  
     // contact_submit(){
    //    this.contact_form_submit=!this.contact_form_submit;
    //  }
  }
