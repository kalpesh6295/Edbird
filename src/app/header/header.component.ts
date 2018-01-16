import {
  Component, Output, EventEmitter, OnInit, Input,HostListener
}
from '@angular/core';
import {
  Router
}
from '@angular/router';
import {
  NgForm
}
from '@angular/forms';
import * as firebase from 'firebase';
import {
  Observable
}
from 'rxjs/Observable';
import {
  Http, Response
}
from '@angular/http';
import {
  HeaderService
}
from './header.service';
import {
  DataService
}
from '../service/data.service';
import {
  field
}
from '../model/field';
import {BrowserModule } from "@angular/platform-browser";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // contact_form_submit = false;
  on_submit_form = false;
  @Input() is_signed_in: boolean;
  @Input() click_contact: boolean = false;
  @HostListener('window:scroll', ['$event'])
  Scroll($event){
   console.log("check");
  }
  signout() {
      firebase.auth().signOut();
      this.is_signed_in = false;
      this.msg = "sign out successfully";
  }
  click_close() {
      this.clicked = false;
      this.menu_status = "menu";
      this.menu_icon_class = "menu-icon";
      this.side_menu_class = "side-menu-hide";
  }
  display: boolean = true;
  @Output() dispEvent = new EventEmitter < boolean > ();
  //@Output() user_signed_in = new EventEmitter<boolean>();

  constructor(private router: Router, private http: Http, private headerservice: HeaderService, private dataservice: DataService) {}
  dispFunc() {
      this.display = true;
      this.dispEvent.emit(this.display);
  }
  goToHomePage() {
      this.router.navigate(['']);
  }
  goToSignIn() {
      this.router.navigate(['SignIn']);
  }
  fields: field[];
  ngOnInit() {
      this.dataservice.getfields().subscribe(fields => {
          //  console.log(fields);
          this.fields = fields;

      });
  }

  goToProfession(profession_name: string) {
      profession_name = profession_name.replace(/\s/g, '_');
      //console.log(profession_name);
      this.router.navigate(['categories/' + profession_name + '/Insights']);
  }

  clicked = false;
  side_menu_class = "";
  menu_icon_class = "menu-icon";
  menu_status = "menu";

  click_status() {
      if (!this.clicked) {
          this.menu_status = "close";
          this.side_menu_class = "side-menu-show";
          this.menu_icon_class = "nav-icon";
          this.clicked = true;
      } else {
          this.menu_status = "menu";
          this.menu_icon_class = "menu-icon";
          this.side_menu_class = "side-menu-hide";
          this.clicked = false;
      }

  }
  msg;
  //background_class ="back_blur";
  
  contact_us() {
      if (!this.click_contact) {
          this.click_contact = true;
          this.msg = "submitted successfully";
          //   this.background_class="back_blur";

      } else {
          this.click_contact = false;
          //  this.background_class="alert_back_blur";

      }
  }
  on_contact_us(form: NgForm) {
      const username = form.value.requestor_name;
      const email_address = form.value.email;
      const contact_number = form.value.number;
      const requestor_query = form.value.requestor_question_about;
      this.headerservice.ContactUser(email_address, username, contact_number, requestor_query);
      this.click_contact = false;
      // this.background_class="alert_back_blur";
  }

  // contact_submit(){
  //    this.contact_form_submit=!this.contact_form_submit;
  //  }
}