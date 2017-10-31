import { Component, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    
    display:boolean = false
    @Output() dispEvent = new EventEmitter<boolean>();

    constructor(private router:Router ){}
  dispFunc(){
    this.display=!this.display
    this.dispEvent.emit(this.display)
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
goToAnimation(){
  this.router.navigate(['categories/Animation/Insights']);
}
  clicked = false;
  side_menu_class = "side-menu-hide";
  menu_icon_class = "menu-icon";
  menu_status = "menu";

    click_status(){
      if(this.clicked) {
        this.menu_status = "close"; 
        this.side_menu_class = "side-menu-show";
        this.menu_icon_class = "nav-icon";
        this.clicked=!this.clicked;
       }

      else{ 
        this.menu_status="menu";
        this.menu_icon_class = "menu-icon";
        this.side_menu_class = "side-menu-hide";
        this.clicked=!this.clicked;      
     }
             

    }
        
  }
